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
    loading: false,
  };

  onSubmit = searchText => {
    this.setState({
      searchText,
    });
  };

  toggleSpinner = spinnerStatus => {
    this.setState({
      loading: spinnerStatus,
    });
  };

  setBasicState = total => {
    this.setState({
      totalPage: Math.ceil(total / 15),
      total,
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
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.searchText && (
          <ImageGallery
            searchText={this.state.searchText}
            imageCollection={this.state.imageCollection}
            page={this.state.page}
            totalPage={this.state.totalPage}
            setBasicState={this.setBasicState}
            updateImgCollection={this.updateImgCollection}
            toggleSpinner={this.toggleSpinner}
          />
        )}

        {this.state.imageCollection && this.state.totalPage > 1 && <Button />}

        <GlobalStyle />
      </AppStyled>
    );
  }
}
