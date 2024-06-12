import { useState } from "react";
import { logout } from "../../services/api/auth";
import { useNavigate } from "react-router-dom";
import { removeUserInformationFromLocalStorage } from "../../utils/localStorage";

const useProfilePage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    setLoading(true);
    try {
      await logout();
      removeUserInformationFromLocalStorage();
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
  };
};

export default useProfilePage;
