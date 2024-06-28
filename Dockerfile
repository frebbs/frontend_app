# Build stage
FROM node:18 as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build your application
RUN npm run build:js
RUN npm run build:sass

# Run tests, linting, etc.
RUN npm run lint:js

# Production stage
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built assets from the builder stage
COPY --from=builder /app/public /app/public
COPY --from=builder /app/views /app/views
COPY --from=builder /app        /app

# Expose port and start application
EXPOSE 5000
CMD ["node", "server.js"]
