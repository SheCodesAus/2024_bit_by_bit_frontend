import { useState, useEffect } from "react";
// import getUserProcess from "../api/get-user-process";

export default function useUserProcess(userID) {
  const [userProcess, setUserProcess] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getUserProcess(userID)
      .then((userProcess) => {
        setUserProcess(userProcess);
        console.log(`UserProcess: ${userProcess}`);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [userID]);
  return { userProcess, isLoading, error };
}
