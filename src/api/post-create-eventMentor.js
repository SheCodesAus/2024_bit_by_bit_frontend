async function postCreateEventMentor(eventMentorDetails) {
  const url = `${import.meta.env.VITE_API_URL}/eventmentors/`;
  const token = window.localStorage.getItem("token");

  const newEventMentor = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ ...eventMentorDetails }),
  });

  if (!newEventMentor.ok) {
    const fallbackError = "Error trying to create new eventMentor";

    const data = await newEventMentor.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await newEventMentor.json();
}

export default postCreateEventMentor;
