import axios from 'axios';

const API_KEY = '27706951-1a7eb37802d35d3c510bc185f';
axios.defaults.baseURL =
  'https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12&';

export const searchImage = async (search, page) => {
  const url = `&key=${API_KEY}&q=${search}&page=${page}`;
  const materials = await axios.get(url);
  return materials.data.hits;
};
