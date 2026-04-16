// Write your code here!

// Fetch Data from API
const apiUrl = "https://jsonplaceholder.typicode.com/"

async function fetchPosts() {
  try {
    const response = await fetch(apiUrl);
     if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    console.log("Fetched posts:", posts);

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}



// Function Call
fetchPosts();