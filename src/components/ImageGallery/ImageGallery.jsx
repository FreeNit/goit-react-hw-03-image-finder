import { Component } from 'react';

import { fetchImagesData } from 'components/Services/fetchImagesData';
import { ImageGalleryItem } from 'components/ImageGalleyItem/ImageGalleryItem';

import { ImageCollection } from './ImageGallery.styled';

export class ImageGallery extends Component {
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      console.log('We are going to do fetch request');
      const imageCollection = await fetchImagesData(
        this.props.searchText,
        this.props.page
      );
      console.log(imageCollection);
      this.props.updateTotal(imageCollection.totalHits);
      this.props.updateImgCollection(imageCollection.hits);
    }
  }

  render() {
    const { imageCollection } = this.props;

    return (
      imageCollection && (
        <ImageCollection>
          {imageCollection.map(image => (
            <ImageGalleryItem key={image.id} imageData={image} />
          ))}
        </ImageCollection>
      )
    );
  }
}
