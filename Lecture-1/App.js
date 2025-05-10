import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" }, // The object is used to give attribute to our element
  "Hello World from React!" // Children
); // It is the part of our React
const root = ReactDOM.createRoot(document.getElementById("root")); // It is the part of our ReactDOM
console.log(heading); // This heading is a react element which is a javascript object// It is not an h1 element
// root.render(heading); // This render method is taking this heading object and converting it into h1 element

/*
<div id = "parent">
    <div id = "child">
        <h1>My name is Raghav.</h1>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "1" }, "My name is Raghav."),
    React.createElement("h2", { key: "2" }, "My name is Om Jindal."),
  ])
);

root.render(parent); // It will replace all the elemets whatever is written inside root div
console.log(parent);
console.log(parent.props); // Props contain all the attributes and children
