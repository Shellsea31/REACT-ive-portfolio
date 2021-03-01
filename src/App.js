import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/CardContainer/CardContainer";
import Footer from "./Components/Footer/Footer";

function App() {
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
      <CardContainer reducer={title} />
      <Footer />
    </div>
  );
}

export default App;
