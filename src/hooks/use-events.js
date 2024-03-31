import { useState, useEffect } from "react";
import getEvents from "../api/get-events";
import { useAuth } from "./use-auth";

export default function useEvents() {
  const { auth, setAuth } = useAuth();

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (auth) {
      getEvents(auth.token)
        .then((events) => {
          setEvents(events);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, []);
  return { events, isLoading, error };
}
