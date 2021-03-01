import React from "react";
import About from "../Card/About";
import Contact from "../Card/Contact";
import Project from "../projects.json";
import Card from "../Card/Projects";
import ImgTags from "../ImgTags/ImgTags";
const CardContainer = (props) => {
  let card;

  switch (props.reducer) {
    case "About":
      card = <About />;
      break;
    case "Projects":
      card = Project.map((project, index) => (
        <Card key={index} project={project}>
          <ImgTags image={project.image} alt={project.alt} />
        </Card>
      ));
      break;
    case "Contact":
      card = <Contact />;
      break;

    default:
      console.log("no reducer");
      break;
  }

  return (
    <main className="cardContainer container">
      <section className="row">
        <div className="col-sm-12">
          <div className="page-header">
            <h1>{props.reducer}</h1>
          </div>
        </div>
      </section>
      {card}
    </main>
  );
};

export default CardContainer;
