import React from 'react'

const SearchBar = ({search, searcher}) => {
  return (
    <div className='search'>
        <input id='searchbar' className='input' type='text' placeholder='Search Game or Genre' value={search} onChange={searcher}/>
    </div>
  )
}

export default SearchBar