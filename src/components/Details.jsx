import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../helpers/heroes';
import { Link } from 'react-router-dom';
import '../assets/details.css'

export const Details = () => {
  let {id} = useParams();
  let [heroName, setHeroName] = useState(heroes[id-1].title);

  useEffect(() => {
    heroes[id-1].title = heroName;
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }, [heroName, id]);

  return (
    <div>
        <h2>{heroName} Details!</h2>
        <p>id: {id}</p>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <label htmlFor="name">Name: </label>
            <input  type='text' name='name' required value={heroName} onChange={(e)=> setHeroName(e.target.value)}/>
        </form>
        <Link to={'/'}>
          <input type='button' value='Back' className='button'/>
        </Link>
    </div>
  );
}