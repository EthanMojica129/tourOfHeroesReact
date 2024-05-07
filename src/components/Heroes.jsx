import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { heroes as data } from '../helpers/heroes'
import '../assets/heroes.css'

export const Heroes = () => {
  const [heroes, setHeroes] = useState([])
  const [selectedHero, setSelectedHero] = useState(null)
  const [showButton, setShowButton] = useState(false)
  const buttonRef = useRef()

  useEffect(() => {
    const check = () => {
      if (localStorage.getItem("heroes") !== null) {
        setHeroes(JSON.parse(localStorage.getItem('heroes')))
      } else {
        setHeroes(data)
      }
    }
    check()
  }, [])

  const handleClick = (hero) => {
    setSelectedHero(hero)
    setShowButton(true)
    buttonRef.current.scrollIntoView()
  }

  return (
    <div>
      <h2> Top heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} className={`hero-box ${selectedHero && selectedHero.id === hero.id ? 'selected' : ''}`} onClick={() => handleClick(hero)}>
            <h2 className='id'>{hero.id}</h2>
            <h3 className='title'>{hero.title}</h3>
          </li>
        ))}
      </ul>
      {showButton && selectedHero && <div ref={buttonRef}><h2>{selectedHero.title} is my hero!</h2><Link to={`/Details/${selectedHero.id}`}><button>Check Details</button></Link></div>}
    </div>
  )
}