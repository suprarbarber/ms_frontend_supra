FROM node:20

WORKDIR  /src

COPY package*.json ./

RUN npm install

ARG NODE_APP_BACKEND_URL

ENV NODE_APP_BACKEND_URL=${NODE_APP_BACKEND_URL}

COPY . .

ENV PORT=7000

CMD ["npm", "run", "start"]