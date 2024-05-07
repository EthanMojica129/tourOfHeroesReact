import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroes as data } from '../helpers/heroes';
import '../assets/dashboard.css'

export const Dashboard = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const check = () => {
      if (localStorage.getItem("heroes")!== null) {
        setHeroes(JSON.parse(localStorage.getItem('heroes')).slice(0,4));
      } else {
        setHeroes(data.slice(0,4));
      }
    };
    check();
  }, []);

  return (
    <div>
        <h2> Top Heroes</h2>
        <div className='container'>
        {heroes.map((hero) => (
            <div key={hero.id} className='hero'>
                <Link to={`Details/${hero.id}`}><h3>{hero.title}</h3></Link>
            </div>
        ))}
        </div>
    </div>
  );
}