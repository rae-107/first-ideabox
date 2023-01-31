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

  handleChange = event => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({title: '', description: ''})
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.title}
          placeholder="Title"
          name='title'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          value={this.state.description}
          placeholder="Description"
          name='description'
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.handleSubmit(event)}>SUBMIT!</button>
      </div>
    )
  }
}

export default Form 