import React from "react";

const Search = ({searchTerm, setSearchTerm}) =>{
    // 1. props are read only, can't be change its value directly 
    // 2. state term like searchTerm can be ultered only using setSearchTerm
    return (
        <div className="search">
        <div>
            <img src="search.svg" alt="search"/>
            <input 
                type="text"
                placeholder="Search through thousands of movies..."
                value={searchTerm}
                onChange={(event)=>setSearchTerm(event.target.value)}
            />
        </div>

        </div>
    
    );

}

export default Search;