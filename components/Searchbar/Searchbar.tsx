import React from 'react'

const Searchbar = () => {
    return (
        <div className="search pl-0 pt-2 mb-1">
            <input type="text" className="" placeholder="Search Friends" />
            <button><i className="fas fa-search ml-auto"></i>  </button>
        </div>
    )
}

export default Searchbar
