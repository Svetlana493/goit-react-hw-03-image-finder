import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

const SignupSchema = yup.object().shape({
  search: yup.string().trim().required(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, actions) => {
    onSubmit(search);
    actions.resetForm();
  };

  return (
    <SearchbarHeader>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <SearchForm>
          <SearchButton type="submit">
            <BiSearchAlt2 size="20px" />
          </SearchButton>
          <SearchInput
            type="search"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
