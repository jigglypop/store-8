const cache = {
  get(key: string) {
    const result = localStorage.getItem(key);
    if (result) {
      const data = JSON.parse(result);
      return data;
    } else {
      return null;
    }
  },
  set(key: string, data: Record<string, unknown> | string) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};

export default cache;
