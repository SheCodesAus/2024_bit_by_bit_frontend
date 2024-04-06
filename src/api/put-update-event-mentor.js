async function putUpdateEventMentor(mentor_id, newRoleRequested) {
  const url = `${import.meta.env.VITE_API_URL}/eventmentors/${mentor_id}/`;
  const token = window.localStorage.getItem("token");

  const updatedEvent = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      ...newRoleRequested,
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

export default putUpdateEventMentor;
