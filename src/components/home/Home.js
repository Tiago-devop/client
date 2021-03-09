import React, { useEffect, useState } from "react";
import Axios from "axios";

function Home() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    getSnippets();
  }, []);

  async function getSnippets() {
    const snippetsRes = await Axios.get("http://localhost:5000/snippet/");
    setSnippets(snippetsRes.data);
  }

  return <div className="home">Home</div>;
}

export default Home;
