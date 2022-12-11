import {Component} from 'react'
import {Link} from 'react-router-dom'

import ReactContext from '../../context/reactContext'

class Home extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {name, topics, isRegistered} = value

          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              {isRegistered ? (
                <div>
                  <h1>Hello {name}</h1>
                  <p>Welcome to {topics}</p>
                </div>
              ) : (
                <div>
                  <h1>Welcome to meetup</h1>
                  <p>Please register for the topic</p>
                  <Link to="/register">
                    <button type="button">Register</button>
                  </Link>
                </div>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Home
