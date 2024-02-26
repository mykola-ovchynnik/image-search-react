import { Component } from 'react';
import SearchBarHeader from './SearchBar/Searchbar';
import { Container } from './App/App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './Button/Button';
import Modal from './Modal/Modal';
import { serviceGetImages } from 'api/api';
import { Grid } from './Loader/Loader';

class App extends Component {
  state = {
    loading: false,
    page: 1,
    query: '',
    images: [],
    loadMore: false,
    isShowModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ loading: true });

      const { hits, totalHits } = await serviceGetImages(query, page);

      this.setState(prev => ({
        images: [...prev.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onSubmit = query => {
    this.setState({
      query: query,
      images: [],
      page: 1,
      loadMore: false,
    });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onClick = largeImage => {
    this.setState({ largeImage, isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { images, loading, loadMore, isShowModal, largeImage } = this.state;
    return (
      <Container>
        <SearchBarHeader onSubmit={this.onSubmit} />
        {loading && <Grid></Grid>}
        {images.length >= 1 ? (
          <ImageGallery data={images} onClick={this.onClick} />
        ) : (
          <h2 className="noImages">No images loaded yet...</h2>
        )}
        {loadMore && <LoadMoreButton onLoadMore={this.onLoadMore} />}
        {isShowModal && (
          <Modal largeImage={largeImage} onClose={this.closeModal} />
        )}
      </Container>
    );
  }
}

export default App;
