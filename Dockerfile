FROM node:10.13.0

RUN mkdir /app

WORKDIR /app

# .env is not needed in container
# webpack build happens when container is started

COPY client/. /app/client
COPY data/. /app/data
COPY public/. /app/public
COPY server/. /app/server
COPY .babelrc /app
COPY package.json /app
COPY webpack.config.js /app

RUN npm install

# Arguments passed to the image

ARG MY_URL
ARG DB_HOST
ARG DB_USER
ARG DB_PASSWORD
ARG DB_DATABASE
ARG DB_PORT

# Default values, DB_PASSWORD is undefined for no password access

ENV MY_URL=${MY_URL:-http://localhost}
ENV DB_HOST=${DB_HOST:-localhost}
ENV DB_USER=${DB_USER:-root}
ENV DB_DATABASE=${DB_DATABASE:-navbar}
ENV DB_PORT=${DB_PORT:-3306}


RUN echo MY_URL $MY_URL
RUN echo DB_HOST $DB_HOST
RUN echo DB_USER $DB_USER
RUN echo DB_PASSWORD $DB_PASSWORD
RUN echo DB_DATABASE $DB_DATABASE
RUN echo DB_PORT $DB_PORT

EXPOSE 3001

CMD [ "npm", "start" ]