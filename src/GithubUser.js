import React, { Component } from 'react'

class GithubUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
    }

    this.fetchUserData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  fetchUserData = (props) => {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
      .catch(error => console.warn(error))
  }

  render() {
    const { user } = this.state
    return(
      <div className="GithubUser">
        <img src={user.avatar_url} alt=""/>
        <h1>{user.login}</h1>
        <a href={user.html_url} target="_blank">PROFILE</a>
        <h3>Followers: {user.followers} | Following: {user.following}</h3>

      </div>
    )
  }
}

export default GithubUser
