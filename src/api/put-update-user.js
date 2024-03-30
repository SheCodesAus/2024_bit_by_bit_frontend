async function putUpdateUser(token, user_id, userDetails) {
  const url = `${import.meta.env.VITE_API_URL}/users/${user_id}/`;

  const updatedUser = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      ...userDetails,
    }),
  });

  if (!updatedUser.ok) {
    const fallbackError = "Error trying to update user";

    const data = await updatedUser.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await updatedUser.json();
}

export default putUpdateUser;
