import axios from 'axios';

export const BASE_KEY = '39406323-18b40e87edfb9cc743cee3413';

export const DataImages = async (value, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${BASE_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response;
};
