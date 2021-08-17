from category import Category
from card import Card
from urllib.request import urlopen
from bs4 import BeautifulSoup as bs
import urllib.request
import json

# 대표 도메인
URL = 'https://store.baemin.com/'
# 추후 이미지 경로
PUBLIC = "public/image/product/"

Category(URL)
Card(URL, PUBLIC)