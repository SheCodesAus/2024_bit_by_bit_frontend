import { useState, useEffect } from "react";
// import getUserProcess from "../api/get-user-process";

export default function useUserProcess(user_id) {
  const [userProcess, setUserProcess] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getUserProcess(user_id)
      .then((userProcess) => {
        setUserProcess(userProcess);
        console.log(`UserProcess: ${userProcess}`);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [user_id]);
  return { userProcess, isLoading, error };
}
