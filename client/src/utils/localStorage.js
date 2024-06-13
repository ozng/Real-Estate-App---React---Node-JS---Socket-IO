export const saveUserToLocalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const getUserFromLocalStorage = () => {
  const userFromLS = localStorage.getItem("user");
  const parsedData = JSON.parse(userFromLS);

  return parsedData;
};
