const API_KEY = 'YOUR-API-KEY';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (params?: string) => {
  const url = `${API_URL}?api_key=${API_KEY}${params ?? ''}`;
  try {
    const response = await fetch(url);

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
