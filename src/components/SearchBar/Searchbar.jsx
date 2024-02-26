import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';
import { handleError, validateInput } from 'helpers/helpers';

class SearchBarHeader extends Component {
  onSubmit = e => {
    e.preventDefault();

    try {
      const query = validateInput(e.target.query.value);
      this.props.onSubmit(query);
    } catch (error) {
      handleError(error);
    }
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBarHeader;
