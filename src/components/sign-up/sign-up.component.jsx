import React, { Component } from "react";
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
            name :'',
            email : '',
            password:  '',
            confirmPassword: ''
        });
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name] : value});

  }
  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your name, email & password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput 
                name="name" 
                type="name" 
                label="Name"
                value={this.state.name} 
                handleChange={this.handleChange}
                required
            />
            <FormInput 
                name="email" 
                type="email" 
                label="Email"
                value={this.state.email} 
                handleChange={this.handleChange}
                required
            />

            <FormInput
                name="password" 
                type="password" 
                label="Password"
                value={this.state.password} 
                handleChange={this.handleChange}
                required
            />

            <FormInput
                name="confirmPassword" 
                type="password" 
                label="Confirm Password"
                value={this.state.confirmPassword} 
                handleChange={this.handleChange}
                required
            />

            <CustomButton type='submit' >SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
