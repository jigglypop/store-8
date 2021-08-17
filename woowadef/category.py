from card import Card
from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
import json

def Category(URL):
    category_obj = {
        "문구": 1,
        "리빙": 2,
        "책": 3,
        "배민그린": 4,
        "ㅋㅋ에디션": 5,
        "을지로에디션": 6,
        "배달이친구들": 7,
        "선물세트": 8,
        "콜라보레이션": 9,
    }
    url = f'{URL}' 
    html = urlopen(url)
    soup = bs(html, "html.parser")
    # a 태그들
    a_tags = soup.select("ul.gnb_menu0 > li > a")
    for a in a_tags:
        cateCd = a.attrs['href'].split("?")[1]
        # 카테고리 이름
        category_name = a.text
        # 카테고리별로 들어가기
        _url = f"https://store.baemin.com/goods/goods_list.php?page=1&{cateCd}"
        _html = urlopen(_url)
        _soup = bs(_html, "html.parser")        
        # 페이지네이션들
        pages = _soup.select("div.pagination > ul > li > span") + _soup.select("div.pagination > ul > li > a")
        if (len(pages) < 10):
            for i in range(1, len(pages)+1):
                __url = f"https://store.baemin.com/goods/goods_list.php?page={i}&{cateCd}"
                __html = urlopen(__url)
                __soup = bs(__html, "html.parser")  
                # 카테고리 페이지 안의 모든 카드
                cardEls = __soup.select("strong.item_name")
                for card in cardEls:
                    file = open("category_product.json")
                    json_string = json.load(file)
                    # 이 형식으로 추가할 것
                    json_string[card.text] = category_obj[category_name]
                    with open("category_product.json", 'w') as outfile:
                        json.dump(json_string, outfile, indent=4, ensure_ascii=False)