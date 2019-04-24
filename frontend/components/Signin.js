import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SINGIN_MUTATION = gql`
  mutation SINGIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }
  saveToState = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <Mutation 
        mutation={SINGIN_MUTATION} 
        variables={this.state} 
        refetchQueries={
          [{query: CURRENT_USER_QUERY}]
        }
      >
      {
        (signin, { error, loading }) => (
          <Form method="post" onSubmit={async e => {
            e.preventDefault();
            let user = await signin();
            localStorage.setItem('userId', user.data.signin.id);
            this.setState({ email: '', password: '' });
          }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign into your account</h2>
              <Error error={error}></Error>
              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder="Enter your email" value={this.state.email} onChange={this.saveToState}/>
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={this.saveToState}/>
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </Form>
        )
      }
       </Mutation>
    )
  };
}

export default Signin;