# 🐳 Base image nhẹ, ổn định cho React
FROM node:20-alpine

# 📁 Tạo thư mục làm việc trong container
WORKDIR /app

# ⚙️ Copy file khai báo dependency trước để tận dụng cache
COPY package*.json ./

# 🧰 Cài đặt các gói cần thiết cho build (Alpine tối giản nên phải thêm)
RUN apk add --no-cache bash python3 make g++

# 📦 Cài dependency
RUN npm install

# 📦 Copy toàn bộ source code vào container
COPY . .

# 🌐 Nhận biến môi trường từ docker-compose (ví dụ API URL)
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

# 🧱 Build app (CI=false để tránh build fail do warning)
RUN echo "🌐 Using API URL: $REACT_APP_API_URL" && CI=false npm run build

# 🧰 Cài `serve` để chạy file build tĩnh
RUN npm install -g serve

# 🚪 Mở port 3000 để container lắng nghe
EXPOSE 3000

# 🚀 Chạy app ở chế độ production
CMD ["serve", "-s", "build", "-l", "3000"]
