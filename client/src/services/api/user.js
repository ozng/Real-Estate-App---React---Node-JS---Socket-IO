import apiRequest from "../../lib/apiRequest";

export const updateUserData = async (userID, newUserData) => {
  try {
    const response = apiRequest.put(`/user/${userID}`, newUserData);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
