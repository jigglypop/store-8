from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
import json

def DataOption(productId, idx, title):
    file = open("options.json")
    json_string = json.load(file)
    # 이 형식으로 추가할 것
    json_string[idx] = {
        "id": idx,
        "productId": productId,
        "title": title,
    }
    with open("options.json", 'w') as outfile:
        json.dump(json_string, outfile, indent=4, ensure_ascii=False)
    return idx + 1