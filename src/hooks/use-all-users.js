import { useState, useEffect } from "react";
import getUsers from "../api/get-users";
import { useAuth } from "./use-auth";

export default function useAllUsers() {
  const { auth, setAuth } = useAuth();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (auth) {
      getUsers()
        .then((users) => {
          setUsers(users);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [auth]);
  return { users, isLoading, error };
}
