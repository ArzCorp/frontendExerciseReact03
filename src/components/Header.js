import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

const Header = () => {
  document.addEventListener('click', event);
  function event(e) {
    console.log(e);
    let color;
    let textColor;
    const click = e.target;
    const btn = click;
    console.log(btn)
    const btnClass = click.classList.value;
    console.log(btnClass)
    function random(max, min) {
      let aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
      if (aleatorio === 2) {
        color = 'green';
        textColor = 'white';
      }
      if (aleatorio === 3) {
        color = 'red';
        textColor = 'white';
      }
      if (aleatorio === 4) {
        color = 'yellow';
        textColor = 'black'
      }
      if (aleatorio === 5) {
        color = 'blue';
        textColor = 'white';
      }
      if (aleatorio === 6) {
        color = 'orange'
      }
      return color;
    }
    random(0, 6);
    if (btnClass === 'button') {
      btn.style.color = `${textColor}`;
      btn.style.background = `${color}`;
    }
  }

  return (
    <header className="container">
      <div className="logo">
        <h1>
          Ejercicio Web
        </h1>
        <p>
          Pagina creada con React
        </p>
      </div>
      <div className="menu">
        <Link id="btn" className="button" to="/">Home</Link>
        <Link className="button" to="/">Acerca de</Link>
        <Link className="button" to="/">Portafolio</Link>
        <Link className="button" to="/">Blog</Link>
        <Link className="button" to="/">Contacto</Link>
      </div>
    </header >
  )
}

export default Header;