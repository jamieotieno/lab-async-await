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

  // clear existing content
  ul.innerHTML = "";  

// Loop through posts array
   posts.forEach(post => {
    // create li
    const li = document.createElement("li");

    // create h1 and set title
    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    // create p and set body
    const p = document.createElement("p");
    p.textContent = post.body;

    // append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // append li to ul
    ul.appendChild(li);
  });
}


// Function Call
fetchPosts().then(posts => {
  displayPosts(posts);
});