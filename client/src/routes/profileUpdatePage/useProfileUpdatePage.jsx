import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateUserData } from "../../services/api/user";

const useProfileUpdatePage = () => {
  const [error, setError] = useState("");
  const { currentUser, updateUser } = useContext(AuthContext);

  const updateHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    const newUserData = { username, email, password };

    try {
      const res = await updateUserData(currentUser.id, newUserData);
      updateUser(res.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return { currentUser, updateHandler, error };
};

export default useProfileUpdatePage;
