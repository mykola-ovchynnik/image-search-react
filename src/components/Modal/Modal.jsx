import { GalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { ModalWindow, Overlay } from './Modal.styled';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOnClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOnClick}>
        <ModalWindow>
          <GalleryItemImage
            src={this.props.largeImage}
            style={{ height: '70%', cursor: 'default', transform: 'scale(1)' }}
          />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
