import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ _request, params }) => {
  const response = await apiRequest("/post/" + params.id);

  return response.data;
};
