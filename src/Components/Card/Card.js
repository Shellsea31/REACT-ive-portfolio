import React from "react";


const Card = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card border-dark mb-3">
        {props.children}
        <div className="card-body">
          <h1 className="card-title">{props.project.name}</h1>
          <p className="card-text">
            Visit the repository by clicking
            <a
              className="a-repo"
              href={props.project.github}
              target="blank"
            >
              here
            </a>
          </p>
          <p className="card-text">
            Visit the deployed app by clicking
            <a
              className="a-repo"
              href={props.project.live}
              target="blank"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
