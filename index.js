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

// Display Posts

function displayPosts(posts) {
  const container = document.getElementById("post-list");
 container.innerHTML = "";

  // clear existing content
  ul.innerHTML = "";  

// Loop through posts array
   posts.forEach(post => { 

      const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    container.appendChild(postElement);
    
    // create li
    const li = document.createElement("li");

    // create h1 and set title
    const h1 = document.createElement("h1");
   

    // create p and set body
    const p = document.createElement("p");
    

    h1.textContent = post.title;
    p.textContent = post.body;

    // append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // append li to ul
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