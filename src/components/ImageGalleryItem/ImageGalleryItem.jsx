// ImageGalleryItem.js
import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
  const handleClick = () => {
    onClick(largeImageURL);
  };

  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} alt={tags} onClick={handleClick} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
