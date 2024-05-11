import React from 'react';
import { Link } from 'react-router-dom';
import SearchQuery from '../features/order/SearchQuery';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchQuery />
      <Username />
    </header>
  );
}
