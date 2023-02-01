import { Component } from 'react'

export class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.title = 'Todo List';
  }

  render() {
    return (
      <h1>{this.title}</h1>
    )
  }
}