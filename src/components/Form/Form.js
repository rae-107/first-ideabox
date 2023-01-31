import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      description: '',
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.title}
          placeholder="Title"
          name='title'
          onChange={this.handleChange}
        />
        <input
          type='text'
          value={this.state.description}
          placeholder="Description"
          name='description'
          onChange={this.handleChange}
        />
        <button>SUBMIT!</button>
      </div>
    )
  }
}

export default Form 