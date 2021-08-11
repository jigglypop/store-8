
export const getPath = () => {
  const path = location.pathname.split("/");
  const pathname = path[1];
  const params = path[2] ? Number(path[2]) : 0;
  return [pathname, params];
};

