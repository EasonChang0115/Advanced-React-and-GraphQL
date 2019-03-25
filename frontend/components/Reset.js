import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password,confirmPassword: $confirmPassword) {
      id
      name
      email
    }
  }
`;

class Reset extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };
  state = {
    password: '',
    confirmPassword: ''
  }
  saveToState = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <Mutation 
        mutation={RESET_MUTATION} 
        variables={{
          resetToken: this.props.restToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        }}
      >
      {
        (reset, { error, loading }) => (
          <Form method="post" onSubmit={async e => {
            e.preventDefault();
            await reset();
            this.setState({ password: '', confirmPassword: '' })
          }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Reset your password</h2>
              <Error error={error}></Error>
              <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={this.saveToState}/>
              </label>
              <label htmlFor="confirmPassword">
                ConfirmPassword
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter your confirmPassword" value={this.state.confirmPassword} onChange={this.saveToState}/>
              </label>
              <button type="submit">Reset your Password!</button>
            </fieldset>
          </Form>
        )
      }
       </Mutation>
    )
  };
}

export default Reset;