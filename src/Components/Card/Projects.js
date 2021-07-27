import React from "react";

const Card = (props) => {
  const link = {
    color: "black",
  };
  return (
    <div className="col-sm-6">
      <div className="card border-dark mb-3">
        {props.children}
        <div className="card-body">
          <h3 className="card-title">{props.project.name}</h3>
          <h6>{props.project.description}</h6>
          <li>
            Visit the repository{" "}
            <a
              className="a-repo"
              href={props.project.github}
              style={link}
              target="blank"
            >
              here
            </a>
          </li>
          <li>
            Visit the deployed app{" "}
            <a
              className="a-repo"
              href={props.project.live}
              style={link}
              target="blank"
            >
              here
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Card;
