# syntax=docker/dockerfile:1

# Start from a base image
FROM node:20-alpine

# Add maintainer information
LABEL maintainer="jbord@gmail.com"

# Instalar ts-node globalmente
RUN yarn global add ts-node

# Set the current working directory inside the image
WORKDIR /app

# Copy this host files to current directory image => ./ 
COPY package.json yarn.lock ./

# Installing all dependencies with this command
RUN yarn install --production

# Copy all source from current host to current directory image => /app
COPY . .


# Configuring entry point, the app and 1rt argument, needed 2n then
# ENTRYPOINT [ "ts-node" ] 

# Command with 2 arguments to script every time it builds
CMD ["node", "echo 'Hola profundoo'"]
# CMD ["ts-node", "/src/index.ts"]