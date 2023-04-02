import { Component } from 'react';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppStyled } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <GlobalStyle />
      </AppStyled>
    );
  }
}
