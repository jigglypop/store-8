// regex
const getRegex = (tag: string, text: string) => {
  const regex = new RegExp(tag, 'g');
  const datas = text.match(regex) || [];
  return datas;
};

export const isTag = (text: string) => {
  const Tag = '[a-zA-Z-0-9:s]';
  const openTag = `<(${Tag})+>`;
  return getRegex(`${openTag}`, text);
};

export const isOuter = (text: string) => {
  const Tag = '[a-zA-Z-0-9:s]';
  return getRegex(`<(${Tag})+>.*?</(${Tag})+>`, text);
};
