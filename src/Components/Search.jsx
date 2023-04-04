import React from 'react'

const Search = ({handleSubmit,search}) => {
  return (
    <div>
      <form action="" className="search">
        <span className= ''></span>
        <input
          type="text"
          className="search-input"
          value={search}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          onChange={handleSubmit}
          
        />
        <img src="" alt="" />
        <img src="" alt="" />
      </form>
    </div>
  );
}

export default Search