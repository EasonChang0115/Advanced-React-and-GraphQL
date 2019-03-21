import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const SINGUP_MUTATION = gql`
  mutation SINGUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  }
  saveToState = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <Mutation mutation={SINGUP_MUTATION} variables={this.state}>
      {
        (signup, { error, loading }) => (
          <Form method="post" onSubmit={async e => {
            e.preventDefault();
            await signup();
            this.setState({ name: '', email: '', password: '' })
          }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign up for An Account</h2>
              <Error error={error}></Error>
              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder="Enter your email" value={this.state.email} onChange={this.saveToState}/>
              </label>
              <label htmlFor="name">
                Name
                <input type="text" name="name" id="name" placeholder="Enter your name" value={this.state.name} onChange={this.saveToState}/>
              </label>
              <label htmlFor="name">
                Password
                <input type="password" name="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={this.saveToState}/>
              </label>
              <button type="submit">Sign Up!</button>
            </fieldset>
          </Form>
        )
      }
       </Mutation>
    )
  };
}

export default Signup;