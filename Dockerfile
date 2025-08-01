# 1. Build Stage
FROM node:24-alpine AS builder

WORKDIR /app

# คัดลอกทุกไฟล์ไปยัง container
COPY . .

# ติดตั้ง dependencies และ build
RUN npm install && npm run build

# 2. Production Stage
FROM node:24-alpine

WORKDIR /app

# คัดลอกเฉพาะไฟล์ที่ build แล้ว
COPY --from=builder /app/.output ./

# เปิดพอร์ตตามที่ nuxt ใช้
EXPOSE 3000

# รันเซิร์ฟเวอร์ Nitro
CMD ["node", "server/index.mjs"]
