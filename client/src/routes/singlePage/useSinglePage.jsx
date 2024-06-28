import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import { savePost } from "../../services/api/post";

const useSinglePage = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);

  const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      navigate("/login");
    }

    try {
      await savePost(post.id);
    } catch (error) {
      console.log(error.message);
      setSaved((prev) => !prev);
    }
  };

  return { handleSave, saved, setSaved, post };
};

export default useSinglePage;
