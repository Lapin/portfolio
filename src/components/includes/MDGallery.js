import React from 'react';

const MDGallery = ({ images  }) => (
    <div className="grid grid-cols-2">
        {images.map( image => {
            return <img src={image} alt=""/>
        } )}

    </div>
  );
    

export default MDGallery;