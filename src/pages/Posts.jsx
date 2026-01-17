import { useLoaderData, Link } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <div className="card">
      <h2>📚 Posts</h2>

      <Link to="new" className="btn">
        ➕ New Post
      </Link>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
