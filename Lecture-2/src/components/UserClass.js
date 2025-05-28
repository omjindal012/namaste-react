import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Children Constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + "Children ComponentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      console.log("Hello World!");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count != prevState.count ||
      this.state.count2 != prevState.count
    ) {
    }
    console.log(this.props.name + "Children componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "Children ComponentWillUnmount");
  }

  render() {
    const { name, location } = this.state.userInfo;

    console.log(this.props.name + "Children Render");
    return (
      <div className="user-card">
        <h1>Count:- {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          +1
        </button>
        <h1>Count:- {this.state.count2}</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:- @OmJindal1034</h4>
      </div>
    );
  }
}

export default UserClass;
