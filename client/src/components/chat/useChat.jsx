import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchChat, readMessage, sendMessage } from "../../services/api/chat";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

const useChat = () => {
  const [chat, setChat] = useState(null);
  const messageEndRef = useRef(null);

  const decrease = useNotificationStore((state) => state.decrease);

  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat?.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          (async () => {
            await readMessage(chat?.id);
          })();
        }
      });
    }

    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (chatId, receiver) => {
    try {
      const chat = await fetchChat(chatId);

      if (!chat?.seenBy?.includes(currentUser.id)) {
        decrease();
      }

      setChat({ ...chat, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const text = formData.get("text");

    if (!text) {
      return;
    }

    try {
      const message = await sendMessage(text, chat.id);

      setChat((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
      e.target.reset();

      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    chat,
    setChat,
    currentUser,
    handleOpenChat,
    handleSubmit,
    socket,
    messageEndRef,
  };
};

export default useChat;
