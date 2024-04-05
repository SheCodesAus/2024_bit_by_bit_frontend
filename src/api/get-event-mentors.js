async function getEventMentors(token) {
  const url = `${import.meta.env.VITE_API_URL}/eventmentors`;
  const eventMentors = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (!eventMentors.ok) {
    const fallbackError = `Error fetching event mentors`;
    const data = await eventMentors.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detials ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await eventMentors.json();
}

export default getEventMentors;
