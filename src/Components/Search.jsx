import React from 'react'

const Search = ({handleSubmit,search}) => {
  return (
    <div>
      <form action="" className="search">
        <input
          type="text"
          className="search-input"
          value={search}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          onChange={handleSubmit}
          
        />
      </form>
    </div>
  );
}

export default Search