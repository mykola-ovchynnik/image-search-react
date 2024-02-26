import { GalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { ModalWindow, Overlay } from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ largeImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOnClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOnClick}>
      <ModalWindow>
        <GalleryItemImage
          src={largeImage}
          style={{ height: '70%', cursor: 'default', transform: 'scale(1)' }}
        />
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
