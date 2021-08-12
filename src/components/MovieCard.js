import React from "react";

function Moviecard(props) {
  const style = { width: "18rem" };
  console.log(props.movie.show.summary);
  return (
    <div class="container">
      <div class="card" style={style}>
        <img
          src={props.movie.show.image.medium === null? "":props.movie.show.image.medium}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          {props.movie.show.summary && props.movie.show.summary}
        </div>
      </div>
    </div>
  );
}
export default Moviecard;
