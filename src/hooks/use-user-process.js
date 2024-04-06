import { useState, useEffect } from "react";
import getAllUserProcesses from "../api/get-all-user-processes";

export default function useUserProcess(user_id) {
  const [userProcess, setUserProcess] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getAllUserProcesses(user_id)
      .then((userProcess) => {
        setUserProcess(userProcess);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [user_id]);
  return { userProcess, isLoading, error };
}
