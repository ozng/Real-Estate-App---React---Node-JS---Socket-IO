import apiRequest from "../../lib/apiRequest";

export const fetchChat = async (chatId) => {
  const chatURL = `/chat/${chatId}`;

  try {
    const { data } = await apiRequest.get(chatURL);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const sendMessage = async (text, chatId) => {
  const messageURL = `/message/${chatId}`;

  try {
    const { data } = await apiRequest.post(messageURL, { text });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const readMessage = async (chatId) => {
  const readMessageUrl = `/chat/read/${chatId}`;

  try {
    const { data } = await apiRequest.put(readMessageUrl);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
