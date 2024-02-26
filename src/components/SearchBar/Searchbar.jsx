import {
  Header,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';
import { handleError, validateInput } from 'helpers/helpers';

const SearchBarHeader = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    try {
      const query = validateInput(e.target.query.value);
      onSubmit(query);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
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
};

export default SearchBarHeader;
