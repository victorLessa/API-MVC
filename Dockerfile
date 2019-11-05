FROM node:alpine

WORKDIR /usr/app

COPY . /usr/app
RUN npm i -g nodemon@1.18.2
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]