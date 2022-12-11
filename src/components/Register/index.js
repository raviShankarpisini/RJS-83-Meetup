import {Component} from 'react'

import ReactContext from '../../context/reactContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {showErrorMessage: false}

  render() {
    const {showErrorMessage} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {
            name,
            topics,
            onChangeNameprop,
            onChangeTopicsprop,
            onClickChangeView,
          } = value

          const onChangeName = event => onChangeNameprop(event.target.value)

          const onChangeTopics = event => onChangeTopicsprop(event.target.value)

          const onSubmitForm = event => {
            event.preventDefault()
            const {history} = this.props
            console.log('history', history)
            if (name === '') {
              this.setState({showErrorMessage: true})
            } else {
              this.setState({showErrorMessage: false})
              onClickChangeView()
              history.replace('/')
            }
          }

          return (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <div>
                <h1>Let us join</h1>
                <form onSubmit={onSubmitForm}>
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={onChangeName}
                  />
                  <label htmlFor="topics">TOPICS</label>
                  <select id="topics" value={topics} onChange={onChangeTopics}>
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit">Register Now</button>
                  {showErrorMessage && <p>Please enter your name</p>}
                </form>
              </div>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Register
