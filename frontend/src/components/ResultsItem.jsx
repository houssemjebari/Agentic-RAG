import React from "react";

export default function ResultItem({ question, answer, references = []}) {

    return (
        <div style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px"}}>
            {/* Question */}
            <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{question}</div>
            {/* Answer */}
            <div style={{ marginBottom: "1rem" }}>{answer}</div>
            {/* References */}
            {references.length > 0 && (
               <div style={{ fontSize: "0.9rem", color: "#666" }}>
                <strong>References:</strong>
                <ul>
                {references.map((ref,index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", gap: "3rem"}}>
                        <a href={ref.url} target="_blank" rel="noreferrer">
                            {ref.domain}
                        </a>
                        <img src={ref.logo} alt="logo" width="50" />
                    </li>
                ))}    
                </ul> 
                </div>
    )}
    </div>
    );
}