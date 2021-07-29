const mapUrlsToId = (urlArr) => {
  const urlBase = 'https://rickandmortyapi.com/api/character/';
  const idArr = urlArr.map((url) => url.replace(urlBase, ''));
  return idArr;
};

export default mapUrlsToId;
