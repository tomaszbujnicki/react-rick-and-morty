const mapUrlToId = (url) => {
  const reg = /\D+/;
  const id = url.replace(reg, '');
  return id;
};

export default mapUrlToId;
