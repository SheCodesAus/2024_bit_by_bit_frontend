async function getUser(user_id) {
  const url = `${import.meta.env.VITE_API_URL}/users/${user_id}`;
  const token = window.localStorage.getItem("token");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (!response.ok) {
    const fallbackError = `Error fetching event with id ${user_id}`;
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detials ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default getUser;
