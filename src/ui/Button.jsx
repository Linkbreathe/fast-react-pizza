import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'transition-color text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring  focus:ring-yellow-200 focus:ring-opacity-50 focus:ring-offset-2disabled:cursor-not-allowed disabled:opacity-50 ';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4 ',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-sm',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'border-2 text-sm border-stone-300 transition-color inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 hover:bg-stone-300 focus:bg-stone-200 focus:outline-none focus:ring  focus:ring-stone-200 focus:ring-opacity-50 focus:ring-offset-2disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
