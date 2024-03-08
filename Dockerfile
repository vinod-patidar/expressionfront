# Use an official Node.js runtime as a base image
FROM node:16.20.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package.json

RUN npm install --silent

COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]