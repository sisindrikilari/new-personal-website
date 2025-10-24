FROM node:lts-alpine AS builder
WORKDIR /app
copy package*.lock.json ./
RUN npn install
COPY . .
RUN npn run build

FROM nginx:alphine
COPY --from=builder /app/build  /user/share/nginx/html
EXPOSE 80
CMD ["nginx" , "-g" , "daemon off";]
