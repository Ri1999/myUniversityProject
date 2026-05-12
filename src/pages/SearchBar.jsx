import React from 'react'
import { GiArtificialHive } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import "./Explore.css";
const SearchBar = () => {
  return (
    <div className='searchArea' >
      <div className='upperSearchArea flexy'>
      <h2><GiArtificialHive size={30} /> Find the Right Teacher for Your Learning Journey</h2>
      <p>Search by subject, expertise, or location to connect with trusted educators...</p>
      </div>
      <div className="lowerSearchArea flexy">
        <form className="searchForm">

          <input
          type="text"
          placeholder="Search by subject, city, or teacher name..."
          />
          <button type="submit">
            <IoSearch size={22} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar