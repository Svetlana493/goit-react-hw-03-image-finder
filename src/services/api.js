const API_KEY = '27706951-1a7eb37802d35d3c510bc185f';
const BASE_URL = 'https://pixabay.com/api/';

const API = (imageName, page) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${imageName}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(response.status));
  });
};

export default API;
