import React, { Component } from "react";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone:""
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    //send user object to backup

  };
  render() {
    return (
      <React.Fragment>
        <h2>Login Details</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Email Id:::</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.inputHandler}
            />
          </div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
            /><div>
                
            
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.inputHandler}
            />
        
          
          <input type="submit" />
          </div>
        </form>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
        <h1>{this.state.phone}</h1>

      </React.Fragment>
    );
  }
}

export default Employee;
