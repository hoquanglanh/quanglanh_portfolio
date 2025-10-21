# 🐳 Base image nhỏ gọn
FROM node:20-alpine

# 📁 Tạo thư mục làm việc
WORKDIR /app

# ⚙️ Copy package.json và cài dependency (được cache)
COPY package*.json ./
RUN npm install

# 📦 Copy toàn bộ source code vào container
COPY . .

# 🌐 Nhận build argument từ docker-compose
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
RUN echo "🌐 Using API URL: $REACT_APP_API_URL"

# 🧱 Build app
RUN chmod +x node_modules/.bin/react-scripts && CI=false npm run build

# 🧰 Cài server để serve build
RUN npm install -g serve

# 🚪 Mở port 3000
EXPOSE 3000

# 🚀 Chạy server
CMD ["serve", "-s", "build", "-l", "3000"]
