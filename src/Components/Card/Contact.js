import React from "react";

const Contact = () => {
  const style = {
    padding: "100px",
  };
  return (
    <div className="col-sm-12" style={style}>
      <div className="row">
        <h2 align="center">Reach Out</h2>
        <h6>Email: elainesbarrera@gmail.com</h6>
        <h6>Phone number: 408-642-4079</h6>
      </div>

      <div className="row">
        <h2 align="center">My Work</h2>
        <h6>
          Github:
          <span>
            <a href="https://github.com/Shellsea31" target="blank">
              github
            </a>
          </span>
        </h6>
        <h6>
          LinkedIn:
          <span>
            <a
              href="https://www.linkedin.com/in/shelsy-barrera-4410231b6/"
              target="blank"
            >
              LinkedIn
            </a>
          </span>
        </h6>
        <h6>
          Resume:
          <span>
            <a
              href="https://docs.google.com/document/d/1vV4jDBcuY_0QXU0iHZJo-9g8CfQjo_h_kTtgaRRlS4Q/edit?usp=sharing"
              target="blank"
            >
              here
            </a>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Contact;
