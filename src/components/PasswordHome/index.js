import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordList from '../PasswordList'

import './index.css'

class PasswordHome extends Component {
  state = {passwordslist: [], website: '', username: '', password: ''}

  addDetails = event => {
    event.preventDefault()
  }

  getWebsite = event => {
    this.setState({website: event.target.value})
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  addDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {website, username, password, id: uuidv4()}
    this.setState(prevState => ({
      passwordslist: [...prevState.passwordslist, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  passwordItem = () => {
    const {passwordslist} = this.state
    if (passwordslist.length === 0) {
      return (
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        />
      )
    }
    return passwordslist.map(passwordDetails => (
      <PasswordList passwordDetails={passwordDetails} id={passwordDetails.id} />
    ))
  }

  render() {
    const {website, username, password, passwordslist} = this.state

    return (
      <div className="first-bg-container">
        <img
          alt="app logo"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="first-responsive-container">
          <img
            alt="password manager"
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
          <form className="user-inputs-container" onClick={this.addDetails}>
            <p className="description">Add New Password</p>
            <div className="input-container">
              <img
                alt="website"
                className="icons"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                onChange={this.getWebsite}
                value={website}
                placeholder="Enter Website"
                className="input"
                type="text"
              />
            </div>
            <div className="input-container">
              <img
                alt="username"
                className="icons"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                onChange={this.getUsername}
                value={username}
                placeholder="Enter Username"
                className="input"
                type="text"
              />
            </div>
            <div className="input-container">
              <img
                alt="password"
                className="icons"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                onChange={this.getPassword}
                value={password}
                placeholder="Password"
                className="input"
                type="password"
              />
            </div>
            <div className="btn">
              <button className="button" type="button">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="second-responsive-container">
          <div className="second-container">
            <p className="password">
              Your Passwords <span className="span">0</span>
            </p>
            <div className="search-container">
              <img
                alt="search"
                className="icons"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input className="search" placeholder="search" type="search" />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="text-alining">
            <input id="password" type="checkbox" />
            <label htmlFor="password">Show Passwords</label>
          </div>
          <ul>{this.passwordItem()}</ul>
        </div>
      </div>
    )
  }
}
export default PasswordHome
