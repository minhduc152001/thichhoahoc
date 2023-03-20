FROM node:16-alpine

EXPOSE 8081

ARG BUILD_NUMBER
ENV BUILD_NUMBER=$BUILD_NUMBER

WORKDIR /app
COPY . .
RUN npm install

CMD ["npm","run","dev"]
