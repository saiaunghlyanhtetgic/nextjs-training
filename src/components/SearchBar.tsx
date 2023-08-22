"use client"
import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState("")
  return (
    <form className='flex gap-1' onSubmit={(e) => {
        e.preventDefault()
        alert(search)
    }}>
        <input
            type="text"
            placeholder='search posts'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
    </form>
  )
}

export default SearchBar