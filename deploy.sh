#!/bin/bash
# 🚀 Tự động build & deploy lên EC2

# 1. Build lại images
docker build -t hvnn1606/portfolio-frontend:latest ./frontend --build-arg REACT_APP_API_URL=http://3.80.109.184:8080 --no-cache
docker build -t hvnn1606/portfolio-backend:latest ./backend --no-cache

# 2. Push Docker Hub
docker push hvnn1606/portfolio-frontend:latest
docker push hvnn1606/portfolio-backend:latest

# 3. SSH EC2 và cập nhật containers
ssh -i "D:\DevOps\aws-key.pem" ubuntu@3.80.109.184 << 'EOF'
  cd ~/portfolio
  sudo docker compose down
  sudo docker pull hvnn1606/portfolio-frontend:latest
  sudo docker pull hvnn1606/portfolio-backend:latest
  sudo docker compose up -d
EOF

echo "✅ Deploy hoàn tất!"
