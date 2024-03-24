import { useState, useEffect } from "react";
import getUser from "../api/get-user";

export default function useUser(userID) {
  const [user, setuser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getUser(userID)
      .then((user) => {
        setuser(user);
        console.log(`User: ${user}`);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [userID]);
  return { user, isLoading, error };
}
