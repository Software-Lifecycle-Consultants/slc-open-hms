export const submitBlog = async (formData: FormData) => {
  try {
    const response = await fetch("https://localhost:7042/api/AdminBlogs", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Success:", result);

    return result; // Return the result for further processing
  } catch (error) {
    console.error("Error:", error);
    throw error; // Throw error to be handled by the calling function
  }
};
