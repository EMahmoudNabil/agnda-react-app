export const useNavbarHook = ({ handleSearch }) => {
  //take value of text and pass to FUNC reander to  app file
  const onSearch = (word) => {
    console.log(word);
    handleSearch(word);
  };

  return [onSearch];
};
