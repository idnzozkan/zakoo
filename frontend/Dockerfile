FROM node:16.14.0-alpine3.14 AS BUILDER

WORKDIR /app

COPY package.json package-lock.json yarn.lock ./

RUN npm install 

COPY . .

RUN npm run build

# Stage 2
FROM node:16.14.0-alpine3.14

WORKDIR /app

RUN npm install -g serve

COPY --from=BUILDER /app/build .

EXPOSE 3000

CMD serve -s -n