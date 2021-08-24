export const getS3Url = (url: string) => {
  return (process.env.S3_URL + url).replace('/public/image/', '/public/');
};
