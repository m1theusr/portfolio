# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files first for better caching
COPY package.json yarn.lock* ./

# Install dependencies using yarn
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Set timezone
RUN apk add --no-cache tzdata
ENV TZ=America/Sao_Paulo

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package files
COPY package.json yarn.lock* ./

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 4000

# Start the application
CMD ["node", "dist/main.js"]
