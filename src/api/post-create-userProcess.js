async function postCreateUserProcess(userProcessDetails) {
  const url = `${import.meta.env.VITE_API_URL}/user-process/`;

  const newUserProcess = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...userProcessDetails,
    }),
  });

  if (!newUserProcess.ok) {
    const fallbackError = "Error trying to create user";

    const data = await newUserProcess.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await newUserProcess.json();
}

export default postCreateUserProcess;
