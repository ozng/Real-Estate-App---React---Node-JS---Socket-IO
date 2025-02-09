import apiRequest from "../../lib/apiRequest";

export const register = async (userCredential) => {
  const registerURL = "/auth/register";

  try {
    const { data } = await apiRequest.post(registerURL, userCredential);
    console.log(data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const login = async (userCredential) => {
  const loginURL = "/auth/login";

  try {
    const { data } = await apiRequest.post(loginURL, userCredential);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const logout = async () => {
  const logoutURL = "/auth/logout";

  try {
    const { data } = await apiRequest.post(logoutURL);
    console.log(data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
