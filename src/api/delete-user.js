async function deleteUser({ user_id, token }) {
  const url = `${import.meta.env.VITE_API_URL}/users/${user_id}/`;

  const deletedUser = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });

  if (!deletedUser.ok) {
    const fallbackError = "Error trying to delete user";

    const data = await deletedUser.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return true;
}

export default deleteUser;
