import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UploadImageStyle = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 0.5rem;
  label.upload-input-wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.6rem;
    max-height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  input.upload-image {
    display: none;
  }
`;

class UploadImage extends Component {
  uploadFile = async e => {
    // const files = e.target.files;
    // if (files.length === 0) return;
    // const data = new FormData();
    // data.append('file', files[0]);
    // data.append('upload_preset', 'Litfits');
    // const res = await fetch('https://api.cloudinary.com/v1_1/dpy8roliv/image/upload', {
    //   method: 'POST',
    //   body: data
    // });
    // const file = await res.json();
    // this.props.setImageUrlFunc(file.secure_url);
    this.props.setImageUrlFunc('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png');
  }
  render() {
    let { imageUrl } = this.props;
    let renderBlock = imageUrl.length === 0 ?
    <><FontAwesomeIcon icon="cloud-upload-alt"></FontAwesomeIcon>上傳你的圖片</> : 
    <img src={imageUrl} alt="Upload Preview" />;
    return (
      <UploadImageStyle>
        <label htmlFor="file" className="upload-input-wrap">
          {renderBlock}
          <input
            className="upload-image"
            type="file"
            id="file"
            name="file"
            placeholder="Upload an Image"
            onChange={this.uploadFile}
          />
        </label>
      </UploadImageStyle>
    );
  };
}

export default UploadImage;