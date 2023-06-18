import { SearchBtn, SearchFormStyled } from "./SearchForm.styled";
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {

    return (
        <>
            <SearchFormStyled onSubmit={onSubmit}>
                <label>
                    <input
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Enter movies for searching"
                    />
                </label>
                <SearchBtn type="submit">Search</SearchBtn>
            </SearchFormStyled>
        </>
    )
}

export default SearchForm;

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}