import { useState } from "react";

export default function SearchBox({ onSearch }) {
    // Define the States
    const [query, setQuery] = useState("");

    // Define the function handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery(""); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ask about robotics research..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" disabled={query.trim() === ""}>
                Ask
            </button>
        </form>
    );
}