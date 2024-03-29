async function postLogin(username, password) {
  console.log(JSON.stringify({ username: username, password: password }));

  const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  console.log(response);

  if (!response.ok) {
    const fallbackError = "Error tryting to login";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postLogin;
