import { Button } from './Button.styled';

const LoadMoreButton = ({ onLoadMore }) => {
  return <Button onClick={onLoadMore}>Load more</Button>;
};

export default LoadMoreButton;
