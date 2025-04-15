// App.js
import React, { useState } from "react";
import ResultsBox from "./components/ResultsBox";
import SearchBox from "./components/SearchBox";


function App() {
  
  // Define States
  const [history, setHistory] = useState([
    { question: "What is a robot?", answer: "A robot is a machine capable of carrying out complex tasks automatically." },
    { question: "What is agentic RAG?", answer: "It’s a retrieval-augmented generation system using agent-based reasoning." }
  ]);
  const [lastAnswer, setLastAnswer] = useState("");
  const [isStreaming, setIsStreaming] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");

  // Handler Methods
  const onSearch = (query) =>
  {
    setLastAnswer("");
    setIsStreaming(true);
    setCurrentQuery(query);

    const fakeAnswer = "Sure! Agentic RAG systems combine planning, tool usage, and memory for smarter retrieval and generation";
    let index = 0;

    const interval = setInterval(() => {
      setLastAnswer((prev) => prev + fakeAnswer[index]);
      index++;
      if (index >= fakeAnswer.length) {
        clearInterval(interval);
        setIsStreaming(false);
        setHistory((prev) => [...prev, { question: query, answer: fakeAnswer }]);
      }
    }, 50); // type speed
  };

  return (
    <div
    style={{ padding: "1rem" }}

    >
      <h1>Agentic RAG Chat</h1>
      <ResultsBox history={history} isStreaming={isStreaming} query={currentQuery} lastAnswer={lastAnswer}/>
      <SearchBox onSearch={onSearch} />
    </div>
  );
}

export default App;
