cp -r public ./server/dist/public

cd /home/ubuntu/store-8

pm2 start 'TS_NODE_FILES=true TS_NODE_TRANSPILE_ONLY=true ts-node ./server/index.ts'



