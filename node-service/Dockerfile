# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production (Hardened)
FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
# Instalamos solo dependencias de prod y copiamos lo necesario
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

# Seguridad: No correr como root
USER node
EXPOSE 3000
CMD ["node", "dist/index.js"]