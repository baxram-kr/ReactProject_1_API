import React from 'react';
import './ImageCard.css'

function ImageCard({image}) {
  return (
      <div className='box'>
        <img src={image.webformatURL} />
        <div className='text'>
          <h3>Photo by {image.user}</h3>
          <ul>
            <li><strong>Views:</strong>{image.views}</li>
            <li><strong>Downloads:</strong>{image.downloads}</li>
            <li><strong>Likes:</strong>{image.likes}</li>
          </ul>
        </div>
      </div>
  )
}

export default ImageCard;