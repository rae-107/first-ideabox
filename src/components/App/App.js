import React, { Component } from "react";
import Ideas from "../Ideas/Ideas";
import Form from "../Form/Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {
          id: 1,
          title: "Fix linkedIn",
          description: "Use career flow linked in optimizer",
        },
      ],
    };
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  };

  deleteIdea = (id) => {
    const remainingIdeas = this.state.ideas.filter((idea) => idea.id != id);
    this.setState({ ideas: remainingIdeas });
  };

  render() {
    return (
      <main className="App-header">
        <h1>IdeaBox!</h1>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && (
          <h3>No Ideas Yet -- Why Don't We Make Some?</h3>
        )}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    );
  }
}

export default App;
