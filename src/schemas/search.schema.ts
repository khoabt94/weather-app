import * as yup from 'yup';

export const SearchSchema = yup.object().shape({
  city: yup.string().required('Please input a city name!'),

});

