// App.js
import React, { useState } from "react";
import ResultsBox from "./components/ResultsBox";
import SearchBox from "./components/SearchBox";


function App() {
  const [history, setHistory] = useState([
    { question: "What is a robot?", answer: "A robot is a machine capable of carrying out complex tasks automatically." },
    { question: "What is agentic RAG?", answer: "It’s a retrieval-augmented generation system using agent-based reasoning." }
  ]);

  const onSearch = (query) =>
  {
    const historyElement = {"question" : query, "answer" : "Fake Answer"};
    setHistory(prev => [...prev, historyElement]);
  };

  return (
    <div
    style={{ padding: "1rem" }}

    >
      <h1>Agentic RAG Chat</h1>
      <ResultsBox history={history} />
      <SearchBox onSearch={onSearch} />
    </div>
  );
}

export default App;
