import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <h1 id="heading1">Add Posts</h1>
      <input
        type={"text"}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        onClick={() => {
          props.onSubmit({ title, body });
        }}
      >
        Add Post
      </button>
    </div>
  );
}
export default Form;
