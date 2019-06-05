import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(({ id, urls: { regular }, alt_description }) => <ImageCard key={id} src={regular} alt={alt_description} />);
  return <div className="image-list">{images}</div>;
}

export default ImageList;
