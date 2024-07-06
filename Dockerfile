FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install http-server
COPY . .
RUN npm run build

# copy build to the server
#FROM scratch AS export-stage
#COPY --from=build-stage /app/dist /var/www/likesoft-frontend

# Expose the port on which the Vue.js app will run (usually 8080)
EXPOSE 8080

# Command to start the Vue.js app
CMD [ "npm", "run", "start" ]
