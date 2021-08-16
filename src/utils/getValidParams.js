const types = ['character', 'location', 'episode'];
const by = ['name', 'species', 'code', 'type', 'dimension'];

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
  return param.replace(/[^a-zA-Z0-9_-\s]/g, '');
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
