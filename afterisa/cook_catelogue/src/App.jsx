import React, { useEffect, useState } from 'react';
import './app.css';

export const App = () => {
  const [receipe, setReceipe] = useState([]);

  useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes').then((res) => {
      return res.json();
    }).then((data) => {
      setReceipe(data)
    })
  })
  return (
    <div className="app">
      {
        receipe.map((item) => (
          <div key={item.id} className="image-container">
            <p>{item.title}</p> 
            <img src={item.image} alt={item.title} />
          </div>
        ))
      }
      
    </div>
  )
  
}

