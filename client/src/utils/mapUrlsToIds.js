const mapUrlsToIds = (urlArr) => {
  const reg = /\D+/;
  const idArr = urlArr.map((url) => url.replace(reg, ''));
  return idArr;
};

export default mapUrlsToIds;
