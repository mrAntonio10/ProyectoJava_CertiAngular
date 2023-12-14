# Fase de Construcción
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Fase de Servidor
FROM nginx:alpine
COPY --from=build /app/dist/goty /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g","daemonoff;"]

#DOCKER FILE PARA LEVANTAR UNA API
#FROM maven:3.6.3-jdk-8 AS build
#COPY upb/upb .
##RUN export JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")
#RUN mvn clean install
#RUN mvn clean package
#
## Etapa final
#FROM openjdk:8-jdk-alpine
#COPY --from=build /target/upb-0.0.1-SNAPSHOT.jar /demo.jar
#EXPOSE 8086
#ENTRYPOINT ["java", "-jar", "demo.jar"]


##https://www.youtube.com/watch?v=9MR6VMZ9MBo&t=905s
#FROM node:12.22.12
##WORKDIR ./app
#COPY . .
#EXPOSE 8086
#
#CMD ["npm","run","start"]
