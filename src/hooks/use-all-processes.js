import { useState, useEffect } from "react";
import getAllUserProcesses from "../api/get-all-user-processes";

export default function useAllProcesses() {
  const [processes, setprocesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getAllUserProcesses()
      .then((processes) => {
        setprocesses(processes);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return { processes, isLoading, error };
}
