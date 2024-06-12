import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/api/auth";

const useRegister = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await register({ username, email, password });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    error,
    handleSubmit,
  };
};

export default useRegister;
