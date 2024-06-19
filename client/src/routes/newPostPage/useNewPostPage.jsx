import { useState } from "react";
import { createNewPost } from "../../services/api/post";
import { useNavigate } from "react-router-dom";

const useNewPostPage = () => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const inputs = Object.fromEntries(formData);

    const postData = {
      title: inputs.title,
      price: parseInt(inputs.price),
      address: inputs.address,
      city: inputs.city,
      bedroom: parseInt(inputs.bedroom),
      bathroom: parseInt(inputs.bathroom),
      type: inputs.type,
      property: inputs.property,
      latitude: inputs.latitude,
      longitude: inputs.longitude,
      images: images,
    };

    const postDetail = {
      desc: description,
      utilities: inputs.utilities,
      pet: inputs.pet,
      income: inputs.income,
      size: parseInt(inputs.size),
      scholl: parseInt(inputs.scholl),
      bus: parseInt(inputs.bus),
      restaurant: parseInt(inputs.restaurant),
    };

    try {
      const res = await createNewPost(postData, postDetail);
      navigate("/" + res.data.id);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    setDescription,
    description,
    handleSubmit,
    error,
    images,
    setImages,
  };
};

export default useNewPostPage;
