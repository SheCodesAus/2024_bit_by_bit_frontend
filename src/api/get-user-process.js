async function getUserProcess(mentor, token) {
  const url = `${import.meta.env.VITE_API_URL}/user-process/${mentor}`;
  const userProcess = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (!userProcess.ok) {
    const fallbackError = `Error fetching user process with mentor id ${mentor}`;
    const data = await userProcess.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detials ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await userProcess.json();
}

export default getUserProcess;
