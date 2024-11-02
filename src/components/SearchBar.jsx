import React from "react";

export default function SearchBar({
  searchMovie,
  setSearchMovie,
  fetchMovieData,
}) {
  //searchmovie
  return (
    <div className="main flex justify-center p-4">
      <input
        type="text"
        className="bg-gray-200 placeholder-gray-400 w-80 p-2 outline-none rounded-l-lg border-2 border-gray-500 text-black"
        placeholder="Search"
        value={searchMovie}
        onChange={(e)=>setSearchMovie(e.target.value)}
        
      />
      <button onClick={fetchMovieData} className="bg-blue-950 text-white px-4 rounded-r-lg">
        
        Search
      </button>
    </div>
  );
}
