import axios from 'axios';

const API_URL = 'https://api.example.com/workouts';

export const getWorkoutList = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add other workout-related service functions here
