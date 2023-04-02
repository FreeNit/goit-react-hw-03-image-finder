import { Component } from 'react';

import { SearchBarStyled, SearchForm } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  handleChange = e => {
    this.setState({
      searchRequest: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchRequest);
  };

  render() {
    return (
      <SearchBarStyled onSubmit={this.handleSubmit}>
        <header className="searchbar">
          <SearchForm className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchRequest}
              onChange={this.handleChange}
            />
          </SearchForm>
        </header>
      </SearchBarStyled>
    );
  }
}
