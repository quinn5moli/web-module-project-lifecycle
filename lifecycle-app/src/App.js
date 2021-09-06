import React from 'react';
import Card from './components/Card';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    user: '',
    currentUser: 'quinn5moli',
    userData: []
  };

  getData = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => this.setState({
        ...this.state,
        user: '',
        userData: res.data}))
  }
  

componentDidMount(){
  this.getData(this.state.currentUser)
};

  handleChange = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getData(this.state.user)

  }


  render() {
    console.log('App: Renders Dom');
    return (
      <div className="App">
        <h3>Search GitHub users</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" user={this.state.user}/>
          <button>View</button>
        </form>
        <div className="gitUser">
          <Card userData={this.state.userData} />
        </div>
      </div>
    )
  }
}

  export default App;
