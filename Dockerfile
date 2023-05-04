# Utiliser une image de node.js comme base
# FROM node:16-alpine
FROM node:18.16.0-bullseye-slim
ENV NODE_ENV production

# Définir le répertoire de travail
WORKDIR /app

# Copier l'ensemble des fichiers de l'application dans le container
COPY . .

# Installer les dépendances
# RUN yarn install
RUN npm ci --only=production

# Exposer le port 4200
EXPOSE 4200

# Démarrer l'application Angular
CMD ["yarn", "start"]


