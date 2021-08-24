# 우아한 머신러닝

- 코사인 유사도를 이용해서 유사한 제목을 탐색합니다.
- 추천했던 제품의 인덱스를 3개 받아서 코사인 유사도를 탐색합니다.
- 3개의 추천 아이템을 반환합니다.
- 데이터에는 307개의 제품 정보가 CSV로 들어있습니다.

* 기본 포트는 8080이고 post요청으로 3개의 추천했던 제품 인덱스 배열을 받으며, 현재 node.js 서버에서 사용하고 있습니다.

### 1. 파이썬 설치

- 3.9.6 권장

### 2. venv(파이썬 가상환경 만들기)

- python -m venv venv

### 3. 가상환경 실행

- source ./venv/bin/activate

### 4. requirements.txt 자동 설치

- pip3 install -r requirements.txt

### 5. 서버 실행

- python main.py

### 번외) requirements.txt에 모든 가상환경 패키지 버전이 들어있음

- 현재 버전 기록하기) pip3 freeze > requirements.txt
