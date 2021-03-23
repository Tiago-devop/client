import Axios from "axios";
import React from "react";
import "./Snippet.scss";

function Snippet({ snippet, getSnippets, editSnippet }) {
  async function deleteSnippet() {
    await Axios.delete(`http://localhost:5000/snippet/${snippet._id}`);

    getSnippets();
  }

  return (
    <div className="snippet">
      {snippet.title && <h2 className="title">{snippet.title}</h2>}
      {snippet.description && (
        <p className="description">{snippet.description}</p>
      )}
      {snippet.code && (
        <pre className="code">
          <code>{snippet.code}</code>
        </pre>
      )}
      <button onClick={() => editSnippet(snippet)}>Edit</button>
      <button onClick={deleteSnippet}>Delete</button>
    </div>
  );
}

export default Snippet;
