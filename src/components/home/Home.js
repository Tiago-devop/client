import React, { useEffect, useState } from "react";
import Axios from "axios";

import Snippet from "./Snippet";

function Home() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    getSnippets();
  }, []);

  async function getSnippets() {
    const snippetsRes = await Axios.get("http://localhost:5000/snippet/");
    setSnippets(snippetsRes.data);
  }

  function renderSnippets() {
    return snippets.map((snippet, i) => {
      return <Snippet key={i} snippet={snippet} />;
    });
  }

  return <div className="home">{renderSnippets()}</div>;
}

export default Home;
