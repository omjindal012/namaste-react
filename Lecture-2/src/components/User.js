import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello World!");
    }, 1000);

    // This function will be called when we are unmounting this component
    return () => {
      console.log("UseEffect returned!");
      clearInterval(timer);
    };
  }, [count, count2]);

  return (
    <div className="user-card">
      <h1>Count:- {count}</h1>
      <h1>Count2:- {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Jagadhri</h3>
      <h4>Contact:- @OmJindal1034</h4>
    </div>
  );
};

export default User;
