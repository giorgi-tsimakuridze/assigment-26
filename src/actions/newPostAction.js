import { redirect } from "react-router-dom";

export async function newPostAction({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");

  await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  return redirect("/posts");
}
