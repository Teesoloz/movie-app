import React from "react";

function Moviecard(props) {
  const style = {
    width: "18rem",
    borderRadius: "5px",
  };

  console.log(props.movie.show);

  return (
    <div class="card" style={{ style }}>
      <img src={props.movie.show.image.medium} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.movie.show.name}</h5>
        <p class="card-text">{props.movie.show.summary}</p>
        <a href={props.movie.show.url} className="btn btn-primary">
          Watch
        </a>
      </div>
    </div>
  );
}
export default Moviecard;
