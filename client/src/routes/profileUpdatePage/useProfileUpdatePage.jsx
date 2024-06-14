import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const useProfileUpdatePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);

  const updateHandler = () => {
    updateUser({});
  };

  return { currentUser, updateHandler };
};

export default useProfileUpdatePage;
