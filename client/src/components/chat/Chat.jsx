import "./chat.scss";
import useChat from "./useChat";
import { format } from "timeago.js";

function Chat({ chats }) {
  const { handleOpenChat, chat, setChat, currentUser, handleSubmit } =
    useChat();

  console.log(chat);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((chat) => (
          <div
            className="message"
            key={chat.id}
            style={{
              backgroundColor: chat.seenBy.includes(currentUser.id)
                ? "white"
                : "#fecd514e",
            }}
            onClick={() => handleOpenChat(chat.id, chat.receiver)}
          >
            <img src={chat.receiver.avatar || "/noavatar.jpg"} alt="" />
            <span>{chat.receiver.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat?.receiver?.avatar || "noavatar.jpg"} alt="" />
              {chat?.receiver?.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat?.messages?.map((message) => {
              return (
                <div
                  className={"chatMessage"}
                  style={{
                    alignSelf:
                      message.userId === currentUser.id
                        ? "flex-end"
                        : "flex-start",
                    textAlign:
                      message.userId === currentUser.id ? "right" : "left",
                  }}
                  key={message.id}
                >
                  <p>{message.text}</p>
                  <span>{format(message.createdAt)}</span>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
