FROM node:14.17-alpine
WORKDIR /usr/app/
COPY package*.json ./
RUN npm install
EXPOSE 4000
CMD npm run dev
