// Write your code here!
const API_URL = "https://jsonplaceholder.typicode.com/posts";
 
//Fetch API
async function fetchPosts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
}

//Display Posts
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  if (!ul) {
    throw new Error("Missing #post-list in HTML");
  }

  ul.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

async function loadPosts() {
  const posts = await fetchPosts();
  displayPosts(posts);
}

// Function Call
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadPosts);
} else {
  loadPosts();
}