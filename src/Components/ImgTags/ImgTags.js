import React from "react";

const ImgTags = (props) => {
  return (
    <>
      <img
        src={props.image}
        className="card-img-top img-fluid"
        alt={props.alt}
      ></img>
    </>
  );
};

export default ImgTags;
