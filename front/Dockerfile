# Our Node base image
FROM --platform=linux/amd64 node:20-alpine as builder

# Change our current working directory
WORKDIR /usr/src/front

# Copy over `package.json` and lock files to optimize the build process
COPY ["package.json", "package-lock.json*", "./"]
# Install Node modules
RUN npm install

# Copy over rest of the project files
COPY . .

ENV NODE_ENV=production

# Builds solution
RUN npm run build
RUN npm prune --prod

FROM node:18.8.0-alpine AS deployer

WORKDIR /usr/src/front

COPY --from=builder /usr/src/front/build ./build
COPY --from=builder /usr/src/front/package.json .

EXPOSE 80

ENV PORT=80
ENV ORIGIN=http://localhost

ENTRYPOINT [ "node", "build", "--name", "recipe-app", "--port", "80" ]