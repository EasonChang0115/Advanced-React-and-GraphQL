import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder}/>
      </div>
    )
  }
}
