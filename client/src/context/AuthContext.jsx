import { createContext, useEffect, useState } from "react";
import {
  getUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../utils/localStorage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    getUserFromLocalStorage() || null
  );

  const updateUser = (newUserData) => {
    setCurrentUser(newUserData);
  };

  useEffect(() => {
    saveUserToLocalStorage(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
