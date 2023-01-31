import React, { Component } from 'react'
import Ideas from '../Ideas/Ideas'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        {id: 1, title: 'Fix linkedIn', description: 'Use career flow linked in optimizer'}
      ] 
    }
  }

  render() {
    return (
      <div className='App-header'>
        <h1>IdeaBox!</h1>
        {!this.state.ideas.length && <h3>No Ideas Yet -- Why Don't We Make Some?</h3>}
        <Ideas ideas={this.state.ideas}/>
      </div>
    )
  }
}

export default App