import React from 'react';

const Carousel = ({className, classImg, imgStyle, url, altName}) => {
    return (
        <div className={className}>
      <img className={classImg} style={imgStyle} src={url} alt={altName} />
    </div>
    );
};

export default Carousel;