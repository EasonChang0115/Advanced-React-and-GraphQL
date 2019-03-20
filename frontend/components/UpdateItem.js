import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import From from './styles/Form';
import Router from 'next/router';
import Error from './ErrorMessage';
import { resultKeyNameFromField } from 'apollo-utilities';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

class UpdateItem extends Component {
  state = {}

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }

  handleUpdateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log('Update Item!');
    console.log(this.state);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log('Updated');
  }

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{id: this.props.id}}>{
        ({data, loading}) => {
          if (loading) return <p>loading....</p>;
          if (!data.item) return <p>No item found for ID {this.props.id}</p>;
          return (
            <Mutation 
              mutation={UPDATE_ITEM_MUTATION}
              variables={this.state}
            >
              {(updateItem, { loading, error }) => (
                  <From onSubmit={(e) => this.handleUpdateItem(e, updateItem)}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <img width="200" src={data.item.image} alt="Upload Preview"/>
                      <label htmlFor="title">
                        Title
                        <input 
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Enter your title"
                          required 
                          defaultValue={data.item.title}
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
                          defaultValue={data.item.price}
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
                          defaultValue={data.item.description}
                          onChange={this.handleChange}
                          />
                      </label>
                      <button type='submit'>Sav{loading ? 'ing' : 'e'} Changes</button>
                    </fieldset>
                  </From>
                )
              }
            </Mutation>
          )
        }}
      </Query>
    );
  };
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };