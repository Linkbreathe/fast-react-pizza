import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchQuery() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSumbit(e) {
    e.preventDefault();
    if (query === '') return;
    navigate(`/order/${query}`);
  }

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
          tansition-all w-28 rounded-full
          bg-yellow-100 px-4 py-2 text-sm duration-300
        placeholder:text-stone-400 focus:outline-none focus:ring
        focus:ring-yellow-200 focus:ring-opacity-50 sm:w-64 sm:focus:w-72
        "
        />
      </form>
    </div>
  );
}
