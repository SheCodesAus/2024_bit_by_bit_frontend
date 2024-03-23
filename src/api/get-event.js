async function getEvent(eventID) {
  const url = `${import.meta.env.VITE_API_URL}/events/${eventID}`;
  const token = window.localStorage.getItem("token");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (!response.ok) {
    const fallbackError = `Error fetching event with id ${eventID}`;
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detials ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default getEvent;
