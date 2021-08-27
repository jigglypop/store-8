import { useMemo } from 'react';
import { TextureLoader } from 'three';

export default function useTexture(productImgSrc: string) {
  const texture = useMemo(() => {
    const loader = new TextureLoader();
    if (loader) {
      let imgurl = productImgSrc.replace(process.env.S3_URL ?? '' + '/product/image', '/');
      const result = loader.setCrossOrigin('').load(imgurl);
      return result;
    }
  }, [productImgSrc]);
  return texture;
}
