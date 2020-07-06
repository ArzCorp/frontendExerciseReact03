import React from 'react';
import { Link } from 'react-router-dom';
import './css/Articles.css';

const Articles = () => {
  return (
    <section className="articles container">
      <div className="container">
        <div className="article">
          <div className="article__author">
            <p>El 06 de Junio de 2020</p>
            <p>por <span className="title-style">Osvaldo Arzate</span></p>
            <p>3 comentarios</p>
          </div>
          <div className="article__content">
            <h2>Las bondades de HTML5</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <Link className="title-style" to="/">Leer mas...</Link>
          </div>
        </div>
        <div className="article">
          <div className="article__author">
            <p>El 06 de Junio de 2020</p>
            <p>por <span className="title-style">Osvaldo Arzate</span></p>
            <p>3 comentarios</p>
          </div>
          <div className="article__content">
            <h2>Las bondades de HTML5</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <Link className="title-style" to="/">Leer mas...</Link>
          </div>
        </div>
        <div className="article">
          <div className="article__author">
            <p>El 06 de Junio de 2020</p>
            <p>por <span className="title-style">Osvaldo Arzate</span></p>
            <p>3 comentarios</p>
          </div>
          <div className="article__content">
            <h2>Las bondades de HTML5</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <Link className="title-style" to="/">Leer mas...</Link>
          </div>
        </div>
        <div className="article">
          <div className="article__author">
            <p>El 06 de Junio de 2020</p>
            <p>por <span className="title-style">Osvaldo Arzate</span></p>
            <p>3 comentarios</p>
          </div>
          <div className="article__content">
            <h2>Las bondades de HTML5</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <Link className="title-style" to="/">Leer mas...</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles;