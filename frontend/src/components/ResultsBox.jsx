import React from "react";


const ResultsBox = ({ history }) => {
    return (
        <div>
            {history.map((item, idx) => (
                <div key={idx} style={{ marginBottom: "1.5rem" }}>
                    <strong>Q: {item.question}</strong>
                    <p>A: {item.answer} </p>
                </div>
            ))}
        </div>
    )
}
export default ResultsBox;
