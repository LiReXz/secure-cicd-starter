FROM node:20-slim

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev

COPY index.js ./

# Seguridad: No correr como root
USER node
EXPOSE 3000
CMD ["node", "index.js"]