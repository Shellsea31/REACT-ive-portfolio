import React from "react";

const About = () => {
  const style = { margin: "25px" };
  const imgStyle = { height: "300px", width: "300px", margin: "20px" };
  return (
    <div className="container">
      <div style={style} className="row">
        <div className="col-sm-12">
          <img
            style={imgStyle}
            className="float-start"
            id="image"
            src="https://avatars.githubusercontent.com/u/70654835?s=460&u=aea06b3c752ee1ecf1b49ee0f91df119208fa516&v=4"
            alt="PictureShelsy"
          />

          <p>
            Hi! My name is Shelsy Barrera and I'm a recently graduated Full
            Stack Web Developer. On this site you'll find examples of some of my
            best work I've completed during the Berkeley Coding Bootcamp. This
            program has definitely challenged me, and I've learned a lot about
            self discipline and determination. Click "Projects" up top to see
            what I'm all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
