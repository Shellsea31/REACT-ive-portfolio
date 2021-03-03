import React from "react";

const Footer = () => {
  const link = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <footer className="bg-light">
      <div className="container">
        <span className="text-muted">
          This app was created and designed by{" "}
          <span>
            <a href="https://github.com/Shellsea31" style={link} target="blank">
              @Shellsea31
            </a>
          </span>{" "}
          on Github
        </span>
      </div>
    </footer>
  );
};

export default Footer;
