export const saveUserToLocalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const removeUserInformationFromLocalStorage = () => {
  localStorage.removeItem("user");
};
