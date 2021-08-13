import React from "react";

function Moviecard(props) {
  const style = {
    width: "18rem",
    borderRadius: "5px",
  };

  console.log(props.movie.show.image.medium);

  return (
    <div class="card" style={{style}}>
      <img src={props.movie.show.image.medium} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.movie.show.name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Watch
        </a>
      </div>
    </div>
  );
}
export default Moviecard;
