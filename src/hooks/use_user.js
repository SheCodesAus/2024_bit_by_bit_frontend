import { useState, useEffect } from "react";
import getUser from "../api/get-user";

export default function useUser(user_id) {
  const [user, setuser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getUser(user_id)
      .then((user) => {
        setuser(user);
        console.log(`User: ${user}`);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [user_id]);
  return { user, isLoading, error };
}
