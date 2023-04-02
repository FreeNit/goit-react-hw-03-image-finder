import { Component } from 'react';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppStyled } from './App.styled';

import { getImages } from 'components/Services/fetchImagesData';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {};

  onSubmit = searchText => {
    getImages(searchText);
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        <GlobalStyle />
      </AppStyled>
    );
  }
}
