# Use official OpenJDK image with Java 17
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Maven wrapper files
COPY mvnw .
COPY .mvn .mvn

# Copy the project object model file
COPY pom.xml .

# Copy the rest of your application
COPY src src

# Give execute permission to the Maven wrapper script
RUN chmod +x mvnw

# Build your application with Maven
RUN ./mvnw package -DskipTests

# Expose the port your application listens on
EXPOSE 8080

# Run your application
CMD ["java", "-jar", "edu.jar"]
