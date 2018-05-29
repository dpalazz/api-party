import React, { Component } from 'react'

class GithubUser extends Component {
  render() {
    return(
      <div className="GithubUser">
        <h3>Username: {this.props.match.params.username}</h3>
      </div>
    )
  }
}

export default GithubUser
