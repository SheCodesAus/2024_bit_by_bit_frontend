import { useState, useEffect } from "react";
import getEvents from "../api/get-events";

export default function useEvents() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getEvents()
      .then((events) => {
        setEvents(events);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return { events, isLoading, error };
}
