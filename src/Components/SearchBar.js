import React from 'react';
import  './SearchBar.css';
import { GrSearch } from "react-icons/gr";



const SearchBar = () => {
  return (
    <>
      <header>
        <form className="wrapper-search">
        <input  className="search" placeholder="Search a song of your choice" />
          <button className='search-button' type="submit">
          <GrSearch />
          </button>
        </form>
      </header>
    </>
  )
}

export default SearchBar
