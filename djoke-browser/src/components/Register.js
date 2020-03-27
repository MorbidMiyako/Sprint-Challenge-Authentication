import React from "react";
import { useHistory } from "react-router-dom"
import axios from "axios"



class Register extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };


  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // Make a POST request and send the credentials object to the api
    axios
      .post('localhost:5000/api/auth/register', this.state.credentials)
      .then(res => {
        console.log(res)
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;

