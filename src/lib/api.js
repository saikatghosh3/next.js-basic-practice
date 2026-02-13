const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, { cache: "no-store" });
  if (!res.ok) return null; 
  return res.json();
}
