import React from 'react';
import './css/Post.css';

const Post = () => {
  return (
    <section>
      <div className="container">
        <div className="post">
          <div className="post__image image-container">
            <img className="image" src="https://media.istockphoto.com/photos/black-and-white-image-of-the-mayan-temple-of-kukulkan-pyramid-in-picture-id944535288?k=6&m=944535288&s=170667a&w=0&h=lraTdesPa_wZrgQr2N9YzH5wiZUhUBy1pyK-dt67UsU=" alt="postImage" />
          </div>
          <div className="post__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget commodo est, sit amet consectetur erat. Aenean eu euismod quam, ut varius tellus. Vestibulum eu lectus ultricies, ultrices neque at, tincidunt justo. Cras bibendum egestas ligula a eleifend. Praesent congue gravida tellus ut semper.
        </div>
        </div>
      </div>
    </section>
  )
}

export default Post;