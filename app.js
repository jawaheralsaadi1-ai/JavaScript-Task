// app.js - JSONPlaceholder Fetch API Practice
 //* Goal: Learn to use fetch() with the GET method against a
 //* real (but fake) REST API: https://jsonplaceholder.typicode.com




 // Base URL kept in one place so we never repeat it or typo it.
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Write the shared helper first.
// It should: fetch(url) -> check response.ok -> response.json() -> console.log -> return data
// Wrap it all in try/catch.
async function getData(endpoint, label) {
  // code here
}

// --- Posts ---
async function getAllPosts() {
  // call getData with the right endpoint
}
async function getPostById(id) {
  // call getData with the right endpoint
}

// --- Comments ---
// (repeat the pattern)

// --- Albums ---
// (repeat the pattern)

// --- Photos ---
// (repeat the pattern)

// --- Todos ---
// (repeat the pattern)

// --- Users ---
// (repeat the pattern)

// --- Bonus: nested route ---
async function getCommentsForPost(postId) {
  // GET /posts/:id/comments
}

// --- Demo runner ---
async function main() {
  // call a handful of the functions above so you get console output when you run this file
}

main();