import { Component } from 'react';

import { fetchImagesData } from 'components/Services/fetchImagesData';
import { ImageGalleryItem } from 'components/ImageGalleyItem/ImageGalleryItem';

import { ImageCollection } from './ImageGallery.styled';

export class ImageGallery extends Component {
  async componentDidMount() {
    this.props.toggleSpinner(true);

    try {
      const imageCollection = await fetchImagesData(
        this.props.searchText,
        this.props.page
      );
      // console.log(imageCollection);
      this.props.setBasicState(imageCollection.totalHits);
      this.props.updateImgCollection(imageCollection.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      this.props.toggleSpinner(false);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.props.toggleSpinner(true);

      // console.log('We are going to do fetch request');
      try {
        const imageCollection = await fetchImagesData(
          this.props.searchText,
          this.props.page
        );
        // console.log(imageCollection);
        this.props.setBasicState(imageCollection.totalHits);
        this.props.updateImgCollection(imageCollection.hits);
      } catch (error) {
        console.log(error.message);
      } finally {
        this.props.toggleSpinner(false);
      }
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
