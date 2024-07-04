import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchChat, sendMessage } from "../../services/api/chat";

const useChat = () => {
  const [chat, setChat] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (chatId, receiver) => {
    try {
      const chat = await fetchChat(chatId);

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
    } catch (error) {
      console.log(error);
    }
  };

  return { chat, setChat, currentUser, handleOpenChat, handleSubmit };
};

export default useChat;
