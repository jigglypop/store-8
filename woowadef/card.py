from option import DataOption
from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
import urllib.request
import json
from selenium import webdriver

def Card(URL, PUBLIC):
    idx = 1
    option_idx = 1
    for i in range(4, 360):
        try:
            url = f'{URL}goods/goods_view.php?goodsNo={i}' 
            # 배민문방구 접속 
            html = urlopen(url)
            soup = bs(html, "html.parser")
            # 셀렉트 버튼 있는지 여부 확인
            option_container = soup.select("select.chosen-select")
            if len(option_container):
                options = soup.select("select.chosen-select > option")
                if len(options):
                    for option in options[1:]:
                        option_title = option.text.strip()
                        option_idx = DataOption(idx, option_idx, option_title)
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
            # 가격
            select_amount = soup.select("dl.item_price > dd > strong > strong")
            if select_amount:
                amount = select_amount[0].text
            # 원래 가격
            originalAmount = ""
            originalAmounts = soup.select("del > span")
            # print(originalAmounts)
            if originalAmounts:
                originalAmount = originalAmounts[0].text
            # 퍼센트
            sale = 0
            if originalAmount != "":
                amount_value = int(amount.replace(",", ""))
                originalAmount_value = int(originalAmount.replace(",", ""))
                sale = int(100 - (amount_value / originalAmount_value) * 100 )
            # 대표 이미지 주소
            imgSrc = f"{PUBLIC}big/{idx}.jpg"
            # 디테일 이미지 주소
            detailImgSrc = f"{PUBLIC}detail/{idx}.jpg"
            # 카테고리 아이디
            category_file = open("category_product.json")
            category_json_string = json.load(category_file)
            categoryId = 10
            if title in category_json_string:
                categoryId = category_json_string[title]
            # 빈 가격값 조정
            category_amount = {
                1: "5,000",
                2: "5,000",
                3: "20,000",
                4: "5,000",
                5: "15,000",
                6: "15,000",
                7: "15,000",
                8: "15,000",
                9: "25,000",
                10: "25,000",
            }
            if amount == "":
                amount = category_amount[categoryId]
            # 이 형식으로 추가할 것
            json_string[idx] = {
                "id": idx,
                "title": title,
                "productImgSrc": imgSrc,
                "detailImgSrc": detailImgSrc,
                "categoryId": categoryId,
                "amount": amount,
                "originalAmount": originalAmount,
                "sale": sale
            }
            with open("data.json", 'w') as outfile:
                json.dump(json_string, outfile, indent=4, ensure_ascii=False)
            print(f"이미지 {idx} 가져오기 성공")
            idx += 1
        except:
            print(f"에러: 이미지 {idx}")
