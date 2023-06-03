#Stage: 2 
FROM node:alpine as build

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build --prod


#Stage: 2 
FROM nginx:alpine
COPY --from=build /app/dist/dynamic-table /usr/share/nginx/html


# WORKDIR /app
# COPY . /app

# RUN yarn install 

# RUN yarn run build --prod

# #Stage: 2 
# FROM nginx:alpine
# COPY --from=build /app/dist/dynamic-table /usr/share/nginx/html