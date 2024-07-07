import apiRequest from "../../lib/apiRequest";

export const updateUserData = async (userID, newUserData) => {
  try {
    const response = apiRequest.put(`/user/${userID}`, newUserData);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const userNotification = async () => {
  const res = await apiRequest("/user/notification");

  return res.data;
};
