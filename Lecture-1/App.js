import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" }, // The object is used to give attribute to our element
  "Hello World from React!" // Children
); // It is the part of our React
const root = ReactDOM.createRoot(document.getElementById("root")); // It is the part of our ReactDOM
console.log(heading); // This heading is a react element which is a javascript object// It is not an h1 element
root.render(heading); // This render method is taking this heading object and converting it into h1 element

/*
<div id = "parent">
    <div id = "child">
        <h1>My name is Raghav.</h1>
        <h1>My name is Om Jindal.</h1>
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

const reactHeading = React.createElement(
  "h1",
  { id: "heading" },
  "This is heading in React"
);

const element = <span>React Element, </span>;

const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    {/* Element inside another element*/}
    {element}
    This is heading in JSX
  </h1>
); // here we use className not class. We follow camelCase while writing attributes in JSX. Also we need to wrap the code inside round brackets in case we are using multiple lines

console.log(reactHeading);
console.log(jsxHeading);

// React functional component // starts with a capital letter
const HeadingComponent = () => {
  return <h1 className="heading">This is react functional component 🚀</h1>;
};

const TitleComponent = () => (
  <div id="container">
    {/* Whatever is written inside these curly brackets will be considered as a js code */}
    <h2>{100 + 200}</h2>
    {/* This is component composition -> component inside component */}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
    {/* To add a element inside our component */}
    {jsxHeading}
    <h1 className="title">This is title component</h1>
  </div>
);

const elem = (
  <div>
    <h1>This is another element</h1>
    {/* Component inside element */}
    <HeadingComponent />
  </div>
);

root.render(<TitleComponent />); // in this way we render a component in react and babel understands that ok this is a React component
