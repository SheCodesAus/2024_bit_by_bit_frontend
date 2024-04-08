async function deleteEvent({ event_id, token }) {
    const url = `${import.meta.env.VITE_API_URL}/events/${event_id}`;
  
    const deletedEvent = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  
    if (!deletedEvent.ok) {
      const fallbackError = "Error trying to delete event.";
  
      const data = await deletedEvent.json().catch(() => {
        throw new Error(fallbackError);
      });
  
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }
  
    return true;
  }
  
  export default deleteEvent;