FROM node:18.16.0-alpine3.18
COPY ./ /app
WORKDIR /app
CMD [ "./init.sh" ]