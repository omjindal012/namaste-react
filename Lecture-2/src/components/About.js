import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  // First the constructor will be called then Render then componentDidMount
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    // It will be called when the component has been mounted
    console.log("Parent ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent ComponentWillUnmount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Series!</h2>
        <User name="Om Jindal (function)" />
        {/* React will batchup all the render phase of the children component */}
        <UserClass name="FirstClass" />
        <UserClass name="SecondClass" />
      </div>
    );
  }
}

export default About;

// Parent Constructor
// Parent Render

//  FirstClassChildren Constructor
//  FirstClassChildren Render

//  SecondClassChildren Constructor
//  SecondClassChildren Render

//  FirstClassChildren ComponentDidMount
//  SecondClassChildren ComponentDidMount

// Parent ComponentDidMount

// FirstClassChildren Render
// SecondClassChildren Render

// FirstClassChildren componentDidUpdate
// SecondClassChildren componentDidUpdate
