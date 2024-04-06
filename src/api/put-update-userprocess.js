async function putUpdateUserProcess(userProcessDetails, mentor, token) {
    const url = `${import.meta.env.VITE_API_URL}/user-process/${mentor}/`;
  
    const updatedUserProcess = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        ...userProcessDetails,
      }),
    });
  
    if (!updatedUserProcess.ok) {
      const fallbackError = "Error trying to update user process";
  
      const data = await updatedUserProcess.json().catch(() => {
        throw new Error(fallbackError);
      });
  
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }
  
    return await updatedUserProcess.json();
  }
  
  export default putUpdateUserProcess;
  