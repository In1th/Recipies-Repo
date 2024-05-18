FROM openjdk:17-oracle
COPY target/*.jar edu.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "edu.jar"]