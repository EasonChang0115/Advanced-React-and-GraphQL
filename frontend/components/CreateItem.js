import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import From from './styles/Form';
import Router from 'next/router';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }
  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }
  render() {
    return (
      <Mutation 
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
      >
        {(createItem, { loading, error }) => (
            <From onSubmit={async (e) => {
                e.preventDefault();
                const res = await createItem();
                Router.push({
                  pathname: '/item',
                  query: { id: res.data.createItem.id }
                })
              }}>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="title">
                  Title
                  <input 
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter your title"
                    required 
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="price">
                  Price
                  <input 
                    type="number"
                    id="price"
                    name="price"
                    placeholder="price"
                    required 
                    value={this.state.price}
                    onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="description">
                description
                  <textarea 
                    id="description"
                    name="description"
                    placeholder="Enter A Description"
                    required 
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                </label>
                <button type='submit'>Submit</button>
              </fieldset>
            </From>
          )
        }
      </Mutation>
    );
  };
}

export default CreateItem;