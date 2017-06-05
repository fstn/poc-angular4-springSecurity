FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*
COPY backend-build-result/poc-ng-spring-package-${project.version}.jar app.jar
ENTRYPOINT ["java","-Xms256m","-Xss512k","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
EXPOSE 8080