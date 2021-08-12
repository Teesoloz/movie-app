import React from "react";

function Moviecard(props) {
  const style = { height: "50rem", wordWrap:true, width: "18rem", margin:"2rem",  padding:"2rem", borderRadius:"10px" };
  console.log(props.movie.show.summary);
  return (
    <div>
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
