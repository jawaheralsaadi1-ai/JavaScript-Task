// app.js - JSONPlaceholder Fetch API Practice
 //* Goal: Learn to use fetch() with the GET method against a
 //* real (but fake) REST API: https://jsonplaceholder.typicode.com




 // Base URL kept in one place so we never repeat it or typo it.
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Write the shared helper first.
// It should: fetch(url) -> check response.ok -> response.json() -> console.log -> return data
// Wrap it all in try/catch.
async function getData(endpoint, label) {
     try {
     console.log(`\n--- Fetching ${label} (GET ${endpoint}) ---`);
    const response = await fetch(`${BASE_URL}${endpoint}`);

 if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

     const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${label}:`, error.message);
  }
}

// --- Posts ---
async function getAllPosts() { 
  // call getData with the right endpoint
    return getData("/posts", "all posts");

}
async function getPostById(id) {
  // call getData with the right endpoint
    return getData(`/posts/${id}`, `post #${id}`);

   
}

// --- Comments ---
async function getAllComments() {
  return getData("/comments", "all comments");
}
 
async function getCommentById(id) {
  return getData(`/comments/${id}`, `comment #${id}`);
}
// --- Albums ---
async function getAllAlbums() {
  return getData("/albums", "all albums");
}
 
async function getAlbumById(id) {
  return getData(`/albums/${id}`, `album #${id}`);
}
// --- Photos ---
async function getAllPhotos() {
  return getData("/photos", "all photos");
}
 
async function getPhotoById(id) {
  return getData(`/photos/${id}`, `photo #${id}`);
}

// --- Todos ---
async function getAllTodos() {
  return getData("/todos", "all todos");
}
 
async function getTodoById(id) {
  return getData(`/todos/${id}`, `todo #${id}`);
}
// --- Users ---
async function getAllUsers() {
  return getData("/users", "all users");
}
 
async function getUserById(id) {
  return getData(`/users/${id}`, `user #${id}`);
}
// --- Bonus: nested route ---
async function getCommentsForPost(postId) {
  // GET /posts/:id/comments
    return getData(`/posts/${postId}/comments`, `comments for post #${postId}`);
    
}

// --- Demo runner ---
async function main() {
  // call a handful of the functions above so you get console output when you run this file
    await getAllUsers();          // full list, 10 users
    await getAllTodos();          // full list, 200 todos

     // --- GET ONE BY ID (one call per resource, as required) ---
  await getPostById(1);
  await getUserById(5);
  await getCommentById(3);
  await getAlbumById(2);
  await getPhotoById(10);
  await getTodoById(7);
 
  // --- BONUS: nested route ---
  await getCommentsForPost(1);
    // Uncomment these if you want to see the FULL large lists too:
  // await getAllPosts();
  // await getAllComments();
  // await getAllAlbums();
  // await getAllPhotos();
 
}


main();
// Export everything to import these functions
// to the bonus index.html.
export {
  getAllPosts, getPostById,
  getAllComments, getCommentById,
  getAllAlbums, getAlbumById,
  getAllPhotos, getPhotoById,
  getAllTodos, getTodoById,
  getAllUsers, getUserById,
  getCommentsForPost,
}