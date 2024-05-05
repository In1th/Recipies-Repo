FROM maven:3.8.4-openjdk-17 as builder
COPY src /home/app/src
COPY pom.xml /home/app
WORKDIR /home/app

RUN mvn clean package -DskipTests spring-boot:repackage
RUN ls -l /home/app/target

FROM openjdk:17-oracle
COPY --from=builder /home/app/target/*.jar recipe.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "recipe.jar"]
