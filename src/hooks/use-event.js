import { useState, useEffect } from "react";
import getEvent from "../api/get-event";

export default function useEvent(event_id) {
  const [event, setEvent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getEvent(event_id)
      .then((event) => {
        setEvent(event);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [event_id]);
  return { event, isLoading, error };
}
