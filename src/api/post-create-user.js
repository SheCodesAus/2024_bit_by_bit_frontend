async function postCreateUser(userDetails, password) {
  const url = `${import.meta.env.VITE_API_URL}/users/create-user/`;

  const newUser = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...userDetails,
      password,
    }),
  });

  if (!newUser.ok) {
    const fallbackError = "Error trying to create user";

    const data = await newUser.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await newUser.json();
}

export default postCreateUser;
