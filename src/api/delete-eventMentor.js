async function deleteMentor({ mentor_id, token }) {
  const url = `${import.meta.env.VITE_API_URL}/eventmentors/${mentor_id}`;

  const deletedMentor = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });

  if (!deletedMentor.ok) {
    const fallbackError = "Error trying to delete Mentor";

    const data = await deletedMentor.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return true;
}

export default deleteMentor;
