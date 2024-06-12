import axios from "axios";
import { BASE_API_URL } from "../../constants/api";

export const register = async (userCredential) => {
  const registerURL = BASE_API_URL + "/auth/register";

  try {
    const { data } = await axios.post(registerURL, userCredential);
    console.log(data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
