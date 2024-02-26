import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: '40888017-179b7a421750c84ea86ef3d3f',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
};

async function serviceGetImages(searchQuery, page) {
  const { data } = await axios({
    params: { q: searchQuery, page },
  });

  return data;
}

export { serviceGetImages };
