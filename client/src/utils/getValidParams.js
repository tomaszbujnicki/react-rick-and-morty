const types = ['character', 'location', 'episode'];
const by = ['name', 'species', 'episode', 'type', 'dimension'];

const getPage = (param) => {
  if (param === undefined) return 1;
  if (/\D/.test(param)) return undefined;
  if (param === '0') return undefined;
  return Number(param);
};

const getType = (param) => {
  if (types.includes(param)) return param;
  return undefined;
};

const getBy = (param) => {
  if (by.includes(param)) return param;
  return undefined;
};

const getText = (param) => {
  const str = param.replace(/[^a-zA-Z0-9_-\s]/g, '');
  if (str === '') return undefined;
  return str;
};

const getParam = {
  page: getPage,
  type: getType,
  by: getBy,
  text: getText,
};

const getValidParams = (match) => {
  const params = {};
  for (const [key, value] of Object.entries(match.params)) {
    params[key] = getParam[key](value);
  }
  return params;
};

export default getValidParams;
