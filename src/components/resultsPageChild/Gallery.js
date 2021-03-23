import React from "react";

function Gallery(props) {
  return (
    <article style={{ borderStyle: "none" }} className="card">
      <img
        variant="primary"
        style={{ cursor: "pointer" }}
        className="card__image"
        src={props.result.urls.thumb}
        alt=""
        onClick={() => props.getPictureId(props.result.id)}
      />
    </article>
  );
}

export default Gallery;
