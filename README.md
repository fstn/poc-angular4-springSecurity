# poc-angular4-springSecurity
POC to test angular4 with springSecurity

## requirement
- Docker 17.03
```UPDATE
You need to disable docker expose using TLS
```
- NPM 4.4.0
- Maven 3.3.9


## Build and run it 
On root folder:
```mvn
mvn install -P docker,front,docker-run
```

## Why should I use docker?
I added docker to resolve 2 issues by using a Nginx:
- CORS by using proxy path (/back to contact backend)
- HTTPS to protect JWT token

## Verify everything is ok

```docker
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                   PORTS                                            NAMES
6b478270bd6a        poc-ng-spring-frontend:latest   "/opt/entry-point.sh"    4 minutes ago       Up 4 minutes (healthy)   80/tcp, 0.0.0.0:443->443/tcp                     poc-ng-spring-frontend
ee5b1af5f33e        poc-ng-spring-backend:latest    "java -Xms256m -Xs..."   4 minutes ago       Up 4 minutes (healthy)   0.0.0.0:8100->8000/tcp, 0.0.0.0:9386->8080/tcp   poc-ng-spring-backend
```

## Try it
[https://localhost](https://localhost)

## Project structure
### backend-parent
Backend modules, use:
```
- Java 8
- Springboot
- SpringSecurity
```
### frontend-parent
Frontend modules, use:
```
- Angular4
- Angular-cli
- Npm
- Sass
- Bootstrap
```
### docker-parent
Docker modules, use:
```
- Docker
```