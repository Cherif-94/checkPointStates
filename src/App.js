import "./App.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
class App extends Component {
  Person = {
    show: false,
    fullName: "Cherif Ayachi",
    bio: "Hello world ! ",
    proffesion: "Developer",
    imageSrc:
      "https://maroc-diplomatique.net/wp-content/uploads/2021/03/Q-e1614779499923.jpg",
    test: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.Person.show });
  };

  render() {
    return (
      <div className="App">
        <Button variant="secondary" onClick={this.toggleShow}>
          {this.Person.show ? "Hide" : "Show"}
        </Button>
        {!this.Person.show && this.Person.test}
        <h3>{this.Person.fullName}</h3>
        <h3>{this.Person.bio}</h3>
        <h3>{this.Person.proffesion}</h3>
        <img src={this.Person.imageSrc} alt="imagePerson" />
      </div>
    );
  }
}

export default App;
