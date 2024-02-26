export const validateInput = inputValue => {
  inputValue = inputValue.trim();

  if (inputValue === '') {
    throw new Error('Search field cannot be empty!');
  }

  return inputValue;
};

export const handleError = error => alert(error);
