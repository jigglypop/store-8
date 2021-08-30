echo "after deploy 시작!" >> /home/ubuntu/log.txt

cd /home/ubuntu/ >> /home/ubuntu/log.txt

cp -r product ./store-8/dist/public/ >> /home/ubuntu/log.txt

echo "product 이미지 copy 완료" >> /home/ubuntu/log.txt

cd /home/ubuntu/store-8 >> /home/ubuntu/log.txt

pm2 start 'TS_NODE_FILES=true TS_NODE_TRANSPILE_ONLY=true ts-node ./server/index.ts' >> /home/ubuntu/log.txt

echo "pm2 실행완료" >> /home/ubuntu/log.txt

