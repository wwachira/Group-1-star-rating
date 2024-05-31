//rendered RatingList component with ratings data
import React, { useEffect } from "react";
import RatingsList from './components/RatingsList';
import './App.css'

const ratingsData = [
  {
    name: 'John Doe',
    content: 'Fantabuluos!',
    rate: 5,
  },
  {
    name: 'Marcus Rashford',
    content: 'Excellent!',
    rate: 4,
  },
  {
    name: 'Pepe Flo',
    content: 'Good!',
    rate: 3,
  },
  {
    name: 'Drogba Barr',
    content: 'Okay!',
    rate: 2,
  },
  {
    name: 'Ronaldo Blue',
    content: 'Poor!',
    rate: 1,
  },
  {
    name: 'Jesse Lingard',
    content: 'Very Poor!',
    rate: 0,
  },
];

const App = () => {
  return (
    <div className="App">
      <h1><center>Customer Ratings</center></h1>
      <RatingsList ratings={ratingsData} />
    </div>
  );
};

export default App;