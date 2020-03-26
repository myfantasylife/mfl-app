import { API_URL } from './config'

export const getAllNews = () => {
  const url = `${API_URL}/news`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
} 