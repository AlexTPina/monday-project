import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    todos: [],
    message: ''
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/message')
      .then((res) => {
        this.setState({ message: res.data })
      })
  }
  render() {
    return (
      <React.Fragment>
        <div>FS TODO APP</div>
        <div>Message: {this.state.message}</div>
      </React.Fragment>
    )
  }

}

export default App;
