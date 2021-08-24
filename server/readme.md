https://velog.io/@jeff0720/Elasticsearch-%EC%9D%B4%ED%95%B4%EC%99%80-%EB%A1%9C%EA%B7%B8-%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95-%EC%8B%A4%EC%8A%B5%EC%9C%BC%EB%A1%9C-%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90-%EC%9D%B5%ED%9E%88%EA%B8%B0

https://medium.com/@vdongbin/node-js-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-aws-elastic-search-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-ba8c4ead7daf


docker pull docker.elastic.co/elasticsearch/elasticsearch:7.3.1

docker run -d --name elasticsearch-test-01 -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.5.0