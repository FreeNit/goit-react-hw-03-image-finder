import { Component } from 'react';

import { GalleryItem } from './ImageGalleyItem.styled';

export class ImageGalleryItem extends Component {
  state = {};

  render() {
    const { webformatURL, tags } = this.props.imageData;
    return (
      <GalleryItem>
        <img src={webformatURL} alt={tags} />
      </GalleryItem>
    );
  }
}
