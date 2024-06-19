import { useState } from "react";

const useNewPostPage = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    setDescription,
    description,
    handleSubmit,
  };
};

export default useNewPostPage;
