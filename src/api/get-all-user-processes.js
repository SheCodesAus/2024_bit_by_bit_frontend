async function getAllUserProcesses() {
  const url = `${import.meta.env.VITE_API_URL}/user-process`;
  const token = window.localStorage.getItem("token");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (!response.ok) {
    const fallbackError = "Error fetching all users";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detials ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default getAllUserProcesses;
