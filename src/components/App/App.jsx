import { Component } from 'react';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppStyled } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };

  onSubmit = searchText => {
    this.setState({
      searchText,
    });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchText={this.state.searchText} />
        <GlobalStyle />
      </AppStyled>
    );
  }
}
