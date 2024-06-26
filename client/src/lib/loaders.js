import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
  const response = await apiRequest("/post/" + params.id);

  return response.data;
};

export const listPageLoader = ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/post?" + query);

  return defer({
    postResponse: postPromise,
  });
};
