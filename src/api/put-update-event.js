async function putUpdateEvent(token, event_id, eventDetails) {
  const url = `${import.meta.env.VITE_API_URL}/events/${event_id}/`;

  const updatedEvent = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      ...eventDetails,
    }),
  });

  if (!updatedEvent.ok) {
    const fallbackError = "Error trying to update event";

    const data = await updatedEvent.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await updatedEvent.json();
}

export default putUpdateEvent;
