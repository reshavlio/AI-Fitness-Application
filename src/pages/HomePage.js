import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Fitness App</h1>
      <p>Your journey to a healthier life starts here.</p>
      <Link to="/workouts">Explore Workouts</Link>
      <Link to="/progress">Track Your Progress</Link>
    </div>
  );
};

export default HomePage;
