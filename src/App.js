import React, { useEffect, useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/CardContainer/CardContainer";
import Card from "./Components/Card/Projects";
import ImgTags from "./Components/ImgTags/ImgTags";
import Project from "./projects.json";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Card/Contact";

function App() {
  // // spread operator
  // let arr = [1, 2, 3, 4, 5];
  // let newArr = [...arr, 6, 7, 8];
  // console.log(newArr);
  const [title, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "about":
        return (state = "About");
      case "projects":
        return (state = "Projects");
      case "contact":
        return (state = "Contact");

      default:
        break;
    }
  }, "About");

  return (
    <div className="App">
      <Navbar
        nav={(e) => {
          dispatch(e);
        }}
      />
      <CardContainer state={title}>
        <Contact />

        {/* {Project.map((project, index) => (
          <Card key={index} project={project}>
            <ImgTags image={project.image} alt={project.alt} />
          </Card>
        ))} */}
      </CardContainer>
      <Footer />
    </div>
  );
}

export default App;
