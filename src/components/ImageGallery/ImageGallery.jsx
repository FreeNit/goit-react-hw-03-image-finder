import { Component } from 'react';

import { fetchImagesData } from 'components/Services/fetchImagesData';
import { ImageGalleryItem } from 'components/ImageGalleyItem/ImageGalleryItem';

import { ImageCollection } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    imageCollection: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      console.log('We are going to do fetch request');
      const imageCollection = await fetchImagesData(
        this.props.searchText,
        this.state.page
      );
      console.log(imageCollection);
      this.setState({
        imageCollection: imageCollection.hits,
      });
    }
  }

  render() {
    const { imageCollection } = this.state;

    return (
      imageCollection && (
        <ImageCollection>
          {this.state.imageCollection.map(image => (
            <ImageGalleryItem key={image.id} imageData={image} />
          ))}
        </ImageCollection>
      )
    );
  }
}
