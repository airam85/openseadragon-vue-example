FROM node:14.18.1-alpine3.12
COPY ./ /app
WORKDIR /app
RUN npm install
CMD [ "npm", "run", "serve" ]