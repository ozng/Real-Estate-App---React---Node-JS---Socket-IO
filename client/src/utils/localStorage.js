export const saveUserToLocalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
