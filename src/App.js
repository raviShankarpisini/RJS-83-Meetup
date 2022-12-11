import {Route, Switch, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ReactContext from './context/reactContext'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'

import './App.css'

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

// Replace your code here

class App extends Component {
  state = {name: '', topics: topicsList[0].id, isRegistered: false}

  onChangeNameprop = name => this.setState({name})

  onChangeTopicsprop = topics => this.setState({topics})

  onClickChangeView = () => this.setState({isRegistered: true})

  render() {
    const {name, topics, isRegistered} = this.state
    return (
      <ReactContext.Provider
        value={{
          name,
          topics,
          isRegistered,
          onClickChangeView: this.onClickChangeView,
          onChangeNameprop: this.onChangeNameprop,
          onChangeTopicsprop: this.onChangeTopicsprop,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
          <Redirect to="/bad-path " />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
