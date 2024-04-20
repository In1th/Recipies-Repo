# Our Node base image
FROM --platform=linux/amd64 node:20-alpine

# Set the Node environment to development to ensure all packages are installed
ENV NODE_ENV development

# Change our current working directory
WORKDIR /usr/src/front

# Copy over `package.json` and lock files to optimize the build process
COPY ["package.json", "package-lock.json*", "./"]
# Install Node modules
RUN npm ci

# Copy over rest of the project files
COPY . .

# Builds solution
RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "preview" ]