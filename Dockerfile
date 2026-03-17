from node:18-alpine

WORKDIR /app

ENV CI=true 

COPY package.json pnpm-lock.yaml tsconfig.json ./

RUN npm install -g pnpm

# انسخ باقي المشروع
COPY . .


RUN pnpm install

CMD ["pnpm","run" , "start:dev"]