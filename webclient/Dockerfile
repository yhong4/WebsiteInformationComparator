FROM node:11.6.0-slim

WORKDIR /app

COPY . ./

RUN npm install

COPY . .

CMD [ "npm","run","serve" ]
EXPOSE 8080