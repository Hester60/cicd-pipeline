FROM node:18-slim AS build

WORKDIR /usr/src/app

COPY package*.json .

# It will instance dev dependencies (run npm ci for prod)
RUN npm ci

COPY . .

# Fake build
# RUN npm run build

FROM gcr.io/distroless/nodejs:18

WORKDIR /app

COPY --from=build /usr/src/app .

EXPOSE 3000

CMD ["src/index.js"]