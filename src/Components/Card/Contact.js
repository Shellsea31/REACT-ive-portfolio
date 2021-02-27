import React from "react";

const Contact = () => {
  const style = {
    padding: "100px",
  };
  return (
    <div className="col-sm-12" style={style}>
      <h1 align="center">Reach Out</h1>
      <div className="row">
        <h3>Email: elainesbarrera@gmail.com</h3>
        <h3>Phone number: 408-642-4079</h3>
      </div>
      <h1 align="center">My Work</h1>
      <div className="row">
        <h3>
          Github:
          <span>
            <a href="https://github.com/Shellsea31" target="blank">
              github
            </a>
          </span>
        </h3>
        <h3>
          LinkedIn:
          <span>
            <a
              href="https://www.linkedin.com/in/shelsy-barrera-4410231b6/"
              target="blank"
            >
              LinkedIn
            </a>
          </span>
        </h3>
        <h3>
          Resume:
          <span>
            <a
              href="https://docs.google.com/document/d/1vV4jDBcuY_0QXU0iHZJo-9g8CfQjo_h_kTtgaRRlS4Q/edit?usp=sharing"
              target="blank"
            >here</a>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
