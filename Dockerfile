# syntax=docker/dockerfile:1
FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ./ ./

CMD ["npm", "run", "prod"]