FROM node:16.14.0-alpine3.14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]