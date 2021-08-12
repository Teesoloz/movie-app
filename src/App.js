import "./App.css";
import Moviecard from "./components/MovieCard";
import Form from "./components/Form";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  let data;

  const getMovie = async (mySearch) => {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${mySearch}`);
    data = await res.json();
    setMovies(data);
  };
  return (
    <div>
      <Form getMovie={getMovie} />
      <h1>Movie List</h1>
      <div class="container">
        {movies.map((movie, index) => (
          <Moviecard key={index} movie={movie} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
