import { Component } from 'react';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppStyled } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchText: '',
    imageCollection: null,
    page: 1,
    totalPage: 0,
    total: 0,
  };

  onSubmit = searchText => {
    this.setState({
      searchText,
    });
  };

  updateTotal = total => {
    this.setState({
      total,
      totalPage: Math.ceil(total / 15),
    });
  };

  updateImgCollection = collection => {
    this.setState({
      imageCollection: collection,
    });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          searchText={this.state.searchText}
          imageCollection={this.state.imageCollection}
          page={this.state.page}
          totalPage={this.state.totalPage}
          updateTotal={this.updateTotal}
          updateImgCollection={this.updateImgCollection}
        />
        {this.state.imageCollection && this.state.totalPage > 1 && <Button />}

        <GlobalStyle />
      </AppStyled>
    );
  }
}
