import React from "react";
import ResultItem from "./ResultsItem";


const ResultsBox = ({ history, isStreaming, query, lastAnswer }) => {
    return (
        <div>
            {history.map((item, idx) => (
                
                <ResultItem 
                    question={item.question} 
                    answer={item.answer}
                    references={
                        [
                        { 
                            url: "https://arxiv.org/abs/2301.00001",
                            domain: "arxiv.org",
                            logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
                        },
                        { 
                            url: "https://openreview.net/forum?id=H1xwNhCcYm",
                            domain: "openreview.net",
                            logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/ArXiv_logo_2022.svg",
                        },  
                    ]
                    } 
                />
            ))}
        {isStreaming && (
            <ResultItem
                question={query}
                answer={lastAnswer}
                references={[
                { domain: "arxiv.org", url: "https://arxiv.org", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ArXiv_logo.svg/512px-ArXiv_logo.svg.png" }
                ]}
            />
            )}
        </div>
    )
}
export default ResultsBox;
