import "./App.css";
import Form from "./components/Form";
import React from "react";

class App extends React.Component {
  state = { movies: [] };

  getMovie = async () => {
    let data;
    const form = document.querySelector(".form");
    const mySearch = form.elements.query.value;
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${mySearch}`);
    data = await res.json();
    this.setState({ movies: data });
  };

  render() {
    return (
      <div>
        <Form getMovie={this.getMovie()} />
        <h1>Movie List</h1>
        <ul>
          {this.state.movies.map((movie, index) => {
            return (
              <img
                key={index}
                src={movie.show.image.medium}
                alt={movie.show.image.medium}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
