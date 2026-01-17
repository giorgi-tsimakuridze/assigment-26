import { Form } from "react-router-dom";

export default function NewPost() {
  return (
    <div className="card">
      <h2>✍️ Create Post</h2>

      <Form method="post" className="form">
        <input name="title" placeholder="Post title" required />
        <button className="btn">Save</button>
      </Form>
    </div>
  );
}
