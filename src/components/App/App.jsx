import { useEffect, useState } from 'react';
import SearchBarHeader from '../SearchBar/Searchbar';
import { Container } from './App.styled';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreButton from '../Button/Button';
import Modal from '../Modal/Modal';
import { serviceGetImages } from 'api/api';
import { Grid } from '../Loader/Loader';
import { handleError } from 'helpers/helpers';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        const { hits, totalHits } = await serviceGetImages(query, page);

        setImages(prevImages => [...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLoadMore(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onClick = largeImage => {
    setLargeImage(largeImage);
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <Container>
      <SearchBarHeader onSubmit={onSubmit} />
      {loading && <Grid></Grid>}
      {images.length >= 1 ? (
        <ImageGallery data={images} onClick={onClick} />
      ) : (
        <h2 className="noImages">No images loaded yet...</h2>
      )}
      {loadMore && <LoadMoreButton onLoadMore={onLoadMore} />}
      {isShowModal && <Modal largeImage={largeImage} onClose={closeModal} />}
    </Container>
  );
};

export default App;
