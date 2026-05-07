import axios from 'axios';

const API_KEY = '55739361-5e5874765423fdcdec273d0f7'; 

export async function getImagesByQuery(query, page = 1) {

  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });

  return response.data;
}
