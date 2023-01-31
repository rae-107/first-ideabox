import React, { Component } from 'react'
import Ideas from '../Ideas/Ideas'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [

      ] 
    }
  }

  render() {
    return (
      <div className='App-header'>
        <h1>IdeaBox!</h1>
        <Ideas />
      </div>
    )
  }
}

export default App