import React from 'react';
import './css/Hero.css';

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero__details">
            <h3>Entrada destacada</h3>
            <h2>Creando un sitio Web usando HTML5</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className="hero__image image-container">
            <img className="image" src="https://i.pinimg.com/originals/f5/d6/db/f5d6db8ab7a2981ead6c8e75e0a26d8d.jpg" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;