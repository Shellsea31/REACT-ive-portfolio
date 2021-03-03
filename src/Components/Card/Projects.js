import React from "react";

const Card = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card border-dark mb-3">
        {props.children}
        <div className="card-body">
          <h4 className="card-title">{props.project.name}</h4>
          <p>
            Visit the repository by clicking 
            <a className="a-repo" href={props.project.github} target="blank">
              here
            </a>
          </p>
          <p>
            Visit the deployed app by clicking
            <a className="a-repo" href={props.project.live} target="blank">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
