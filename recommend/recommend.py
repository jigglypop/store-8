#데이터 불러오기 
import pandas as pd 
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from numpy.linalg import norm

# 코사인 유사도 함수 2 (분모=!0)
def cos_sim(X,Y):
    return np.dot(X,Y) / ((norm(X) * norm(Y)) + 1e-7)


#추천 함수 
def recommend_five(data, Y):
    result = []
    result_dict = {}
    for j in range(len(Y)):
        y = Y[j]
        for x in range(len(data)):
            if y == x: continue
            sim = cos_sim(data[x], data[y])
            if x in result_dict:
                result_dict[x] += sim
            else:
                result_dict[x] = sim
        if y == len(Y):
            result.append((result_dict[x], x))
    for key, value in result_dict.items():
        result.append((value, key))
    return sorted(result)[::-1][:3]

# 최근 추천 id들의 array를 받아 제목이 비슷한 것 위주로 추천
def get_recommend(dataArray):
    data = pd.read_csv("./data/products.csv",encoding="UTF-8")
    print(dataArray)
    # tfidf 행렬 생성 
    tfidf = TfidfVectorizer(stop_words = 'english')
    # 목표로 할 피쳐
    tfidf_mat = tfidf.fit_transform(data['title']).toarray()
    movieList = [] 
    for similarity, i in recommend_five(tfidf_mat, dataArray):
        movieList.append({
            'id': i,
            'sims': similarity,
            'title': data.loc[i, 'title']
        })

    return movieList