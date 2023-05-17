import React from 'react'
import './searchBox.css'

const SearchBox = (props) => {
  return (
    <div>
        
        <input
            className="search-box"
            type="search"
            placeholder="Search"
            onChange = {props.onChildSearchChange}
        />




    </div>
  )
}

export default SearchBox