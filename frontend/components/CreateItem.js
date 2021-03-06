import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import From from './styles/Form';
import Router from 'next/router';
import Error from './ErrorMessage';
import { resultKeyNameFromField } from 'apollo-utilities';
import { ALL_ITEMS_QUERY } from './Items';
import { PAGINATION_QUERY } from './Pagination';

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

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }
  
  uploadFile = async e => {
    const files = e.target.files;
    if (files.length === 0) return;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'Litfits');
    const res = await fetch('https://api.cloudinary.com/v1_1/dpy8roliv/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
        refetchQueries={
          [{query: ALL_ITEMS_QUERY},{query: PAGINATION_QUERY}]
        }
      >
        {(createItem, { loading, error }) => (
            <From onSubmit={async (e) => {
                e.preventDefault();
                // 因為執行graphQL CURD為非同步動作 所以這邊就用await等待動作完成
                const res = await createItem();
                Router.push({
                  pathname: '/item',
                  query: { id: res.data.createItem.id }
                })
              }}>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">
                  Image
                  <input 
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload an Image"
                    required 
                    onChange={this.uploadFile}
                  />
                  {this.state.image && <img width="200" src={this.state.image} alt="Upload Preview"/> }
                </label>
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
export { CREATE_ITEM_MUTATION };