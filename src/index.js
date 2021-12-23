import React from "react";
import ReactDOM from "react-dom";

import "./test.css";
import { businesses } from "./data";
import Navbar from "./navbar";
import MobileNav from "./mobilenav";

function PageRoot() {
  return (
    <article className="allcomponents">
      <Navbar />
      <MobileNav />
      <article className="pageroot">
        {businesses.map((eachBusiness) => {
          return (
            <Business
              eachBusiness={eachBusiness}
              key={eachBusiness.id}
            ></Business>
          );
        })}
        <a href="#">
          <button>Top</button>
        </a>
      </article>
    </article>
  );
}

const Business = (props) => {
  const { title, products, services } = props.eachBusiness;
  return (
    <section className="business">
      {/* <img src="" alt="" /> */}
      <h1>{title}</h1>
      <h3>{products}</h3>
      <h2>{services}</h2>
    </section>
  );
};
console.log(businesses);
ReactDOM.render(<PageRoot />, document.getElementById("root"));

// var ele = <p>This is how to create variables in react</p>;
// // cannot create them as directly
// ReactDOM.render(ele, document.getElementById("root"));
