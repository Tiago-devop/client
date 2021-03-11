import Axios from "axios";
import React from "react";

function Snippet({ snippet, getSnippets }) {
  async function deleteSnippet() {
    await Axios.delete(`http://localhost:5000/snippet/${snippet._id}`);

    getSnippets();
  }

  return (
    <div className="snippet">
      {snippet.title && <h2>{snippet.title}</h2>}
      {snippet.description && <p>{snippet.description}</p>}
      {snippet.code && (
        <pre>
          <code>{snippet.code}</code>
        </pre>
      )}
      <button onClick={deleteSnippet}>Delete</button>
    </div>
  );
}

export default Snippet;
