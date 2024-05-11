import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {
  const base =
    'transition-color inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring  focus:ring-yellow-200 focus:ring-opacity-50 focus:ring-offset-2disabled:cursor-not-allowed disabled:opacity-50 ';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-sm',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <div>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </div>
  );
}
