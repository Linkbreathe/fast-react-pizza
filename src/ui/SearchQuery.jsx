import { useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function SearchQuery() {
    const [query, setQuery] = useState();
    const navigate = useNavigate();

    function handleSumbit(e) {
        e.preventDefault();
        if (query === "") return;
        navigate(`/order/${query}`);
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input
                    placeholder='Search order #'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </div>
    )
}
