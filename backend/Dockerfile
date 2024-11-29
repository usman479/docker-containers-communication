# FROM node:16-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY server.js .
# EXPOSE 3000
# CMD ["node", "server.js"]


# Use the official Node.js image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the Node.js server
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
