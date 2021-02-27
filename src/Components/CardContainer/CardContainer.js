import React from "react";

const CardContainer = (props) => {
  return (
    <main className="cardContainer container">
      <section className="row">
        <div className="col-sm-12">
          <div className="page-header">
            <h1>{props.state}</h1>
          </div>
        </div>
      </section>
      {props.children}
    </main>
  );
};

export default CardContainer;
