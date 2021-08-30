#!/bin/bash

echo "before deploy 시작!" >> /home/ubuntu/log.txt

cd /home/ubuntu >> /home/ubuntu/log.txt

pm2 delete all >> /home/ubuntu/log.txt
rm -rf store-8 >> /home/ubuntu/log.txt

echo "before deploy 완료!" >> /home/ubuntu/log.txt

