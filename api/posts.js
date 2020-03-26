import { API_URL } from './config'

export const getAllPosts = () => {
  const url = `${API_URL}/posts`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
} 