FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# اگر در notification-service پورت فرق می‌کند، این عدد را مطابق main.ts عوض کن
EXPOSE 3001

CMD ["npm", "run", "start:prod"]
