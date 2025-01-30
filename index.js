async function displayPosts() {
    const container = document.getElementById("posts");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            container.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

displayPosts();
