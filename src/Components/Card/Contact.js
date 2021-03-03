import React from "react";

const Contact = () => {
  const style = {
    padding: "100px",
  };
  const bg = {
    backgroundColor: "white",
  };
  const link = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div className="col-sm-12" style={style}>
      <div className="row">
        <h2 style={bg} align="center">
          Reach Out
        </h2>
        <h6>Email: elainesbarrera@gmail.com</h6>
        <h6>Phone number: 408-642-4079</h6>
      </div>

      <div className="row">
        <h2 style={bg} align="center">
          My Work
        </h2>

        <a href="https://github.com/Shellsea31" style={link} target="blank">
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/shelsy-barrera-4410231b6/"
          style={link}
          target="blank"
        >
          LinkedIn
        </a>
        <a
          href="https://docs.google.com/document/d/1vV4jDBcuY_0QXU0iHZJo-9g8CfQjo_h_kTtgaRRlS4Q/edit?usp=sharing"
          style={link}
          target="blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
