FROM node:alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
CMD node server/express.mjs