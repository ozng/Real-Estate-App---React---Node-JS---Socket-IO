import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api/auth";
import { saveUserToLocalStorage } from "../../utils/localStorage";

const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    setLoading(true);
    try {
      const resData = await login({ username, password });
      saveUserToLocalStorage(resData);
      setError("");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return {
    error,
    loading,
    handleSubmit,
  };
};

export default useLogin;
