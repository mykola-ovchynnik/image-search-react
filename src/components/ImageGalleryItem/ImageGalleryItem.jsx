// ImageGalleryItem.js
import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
