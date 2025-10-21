# 1️⃣ Dùng image Node Alpine nhỏ gọn
FROM node:20-alpine

# 2️⃣ Đặt thư mục làm việc
WORKDIR /app

# 3️⃣ Copy file khai báo dependency
COPY package*.json ./

# 4️⃣ Cài dependency
RUN npm install --only=production

# 5️⃣ Copy toàn bộ source code
COPY . .

# 6️⃣ Thiết lập biến môi trường
ENV NODE_ENV=production
EXPOSE 8080

# 7️⃣ Chạy backend
CMD ["npm", "start"]
