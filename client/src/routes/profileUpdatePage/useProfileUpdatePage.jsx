import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateUserData } from "../../services/api/user";
import { useNavigate } from "react-router-dom";

const useProfileUpdatePage = () => {
  const [error, setError] = useState("");
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const navigate = useNavigate();

  const updateHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    const newUserData = { username, email, password, avatar };

    try {
      const res = await updateUserData(currentUser.id, newUserData);
      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return { currentUser, updateHandler, error, avatar, setAvatar };
};

export default useProfileUpdatePage;
