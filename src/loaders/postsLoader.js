export async function postsLoader() {
  const res = await fetch("http://localhost:3001/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
