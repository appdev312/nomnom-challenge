FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json ./
RUN npm install

# Bundle app source
ADD . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start:production" ]