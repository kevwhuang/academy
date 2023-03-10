FROM node:alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
CMD node javascript/api/express.mjs