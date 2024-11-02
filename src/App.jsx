import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import "./App.css";
import "./index.css";

export default function App() {
  const [allMovieData, setallMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      // const res = await fetch(
        // `http://www.omdbapi.com/?s=${searchMovie}&apikey=[1b8d7e12]&`
      // );
setLoading(true)
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=1b8d7e12`
      );
      const data = await res.json();
      console.log(data);
      setallMovieData(data.Search);
      console.log(allMovieData)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard loading={loading} allMovieData={allMovieData} />
      </div>
    </div>
  );
}
