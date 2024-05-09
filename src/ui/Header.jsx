import React from 'react'
import { Link } from 'react-router-dom'
import SearchQuery from './SearchQuery'

export default function Header() {
    return (
        <header>
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchQuery />
            <p>Linkbreathe</p>
        </header>
    )
}
