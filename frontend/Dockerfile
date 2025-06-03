# Dockerfile for React Frontend (Vite)
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build static files
RUN yarn build

# Production image for serving static files
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Usar configurau00e7u00e3o padru00e3o do Nginx, o proxy reverso vai redirecionar para a porta 80

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
