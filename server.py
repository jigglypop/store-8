from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
import urllib.request
import json

idx = 1
for i in range(4, 350):
    try:
        # 대표 도메인
        URL = 'https://store.baemin.com/'
        # 추후 이미지 경로
        PUBLIC = "public/image/product/"
        url = f'{URL}goods/goods_view.php?goodsNo={i}' 
        html = urlopen(url) # url 열기
        soup = bs(html, "html.parser")
        # 대표 이미지
        image = soup.find("span", {"class": "img_photo_big" }).img
        image_url = URL + image.attrs['src']
        urllib.request.urlretrieve(image_url, f'image/big/{idx}.jpg')
        # 디테일 이미지
        detail = soup.find("div", {"class": "txt-manual" }).img
        detail_url = URL + detail.attrs['src']
        urllib.request.urlretrieve(detail_url, f'image/detail/{idx}.jpg')       
        file = open("data.json")
        json_string = json.load(file)
        # 타이틀
        title = soup.find("div", {"class": "item_detail_tit" }).h3.text
        # 대표 이미지 주소
        imgSrc = f"{PUBLIC}big/{idx}.jpg"
        # 디테일 이미지 주소
        detailImgSrc = f"{PUBLIC}product/detail/{idx}.jpg"
        # 이 형식으로 추가할 것
        json_string[idx] = {
            "id": idx,
            "title": title,
            "imgSrc": imgSrc,
            "detailImgSrc": detailImgSrc
        }
        with open("data.json", 'w') as outfile:
            json.dump(json_string, outfile, indent=4, ensure_ascii=False)
        print(f"이미지 {idx} 가져오기 성공")
        idx += 1
    except:
        print(f"에러: 이미지 {idx}")
