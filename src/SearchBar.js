import React from 'react'
import logo from './img/logo.png'
import SIcon from './img/searchIcon.svg'
import { Link } from 'react-router-dom'
const SearchBar = ({ query, setQuery, handleSubmit }) => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='youtube-logo' src={logo} alt='' />
      </Link>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='search-input'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button type='submit' className='search-btn'>
          <Link to={`/search/${query}`}>
            <img src={SIcon} alt='search icon' />
          </Link>
        </button>
      </form>
    </header>
  )
}

export default SearchBar
