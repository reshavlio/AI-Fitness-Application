import axios from 'axios';

const API_URL = 'https://api.example.com/users';

export const getUserProfile = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

// Add other user-related service functions here
