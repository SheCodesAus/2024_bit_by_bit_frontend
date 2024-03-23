async function postCreateEvent(eventDetails) {
  const url = `${import.meta.env.VITE_API_URL}/events/`;
  const token = window.localStorage.getItem("token");

  const newEvent = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ ...eventDetails }),
  });

  if (!newEvent.ok) {
    const fallbackError = "Error trying to create new event";

    const data = await newEvent.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await newEvent.json();
}

export default postCreateEvent;
