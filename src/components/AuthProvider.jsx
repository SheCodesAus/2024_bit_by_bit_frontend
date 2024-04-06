import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    token: window.localStorage.getItem("token"),
    user_id: window.localStorage.getItem("user_id"),
    username: window.localStorage.getItem("username"),
    is_admin: window.localStorage.getItem("is_admin"),
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
