export const hideId = (id: string): string => {
  return id.slice(0, 2) + new Array(id.slice(2).length).fill('*').join('');
};
