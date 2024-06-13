import { useContext, useState } from "react";
import { logout } from "../../services/api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const useProfilePage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    setLoading(true);
    try {
      await logout();
      updateUser(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return {
    error,
    loading,
    handleLogout,
    currentUser,
    updateUser,
  };
};

export default useProfilePage;
