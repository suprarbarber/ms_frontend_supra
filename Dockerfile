FROM node:20

WORKDIR  /src

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=7000

CMD ["npm", "run", "start"]