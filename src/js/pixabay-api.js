import axios from 'axios';
const API_KEY = '49511859-e69d0a4b83e671b1fc0acb89e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImg(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
