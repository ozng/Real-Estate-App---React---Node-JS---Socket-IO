import apiRequest from "../../lib/apiRequest";

export const createNewPost = async (postData, postDetail) => {
  try {
    const response = await apiRequest.post("/post", {
      postData: postData,
      postDetail: postDetail,
    });

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const savePost = async (postId) => {
  try {
    const response = await apiRequest.post("/user/save", { postId });

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
