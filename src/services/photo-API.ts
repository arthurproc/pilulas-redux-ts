import { Photo } from '../types';

const unspashToken = import.meta.env.VITE_UNSPLASH_TOKEN;

export const fetchPhotos = async (searchTerm: string): Promise<Photo[]> => {
  const header = {
    headers: { Authorization: `Client-ID ${unspashToken}` },
  };
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`, header);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error('Request failed!');
};
