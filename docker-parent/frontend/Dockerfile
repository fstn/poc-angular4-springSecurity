FROM nginx:latest

RUN apt-get -qq update
RUN apt-get -qq -y install curl socat vim

RUN echo 'version=${project.version}' > /version.txt
RUN echo 'build=${docker.image.tag}' >> /version.txt

RUN mkdir /usr/share/nginx/html/jnlp
COPY frontend-build-result/poc-ng-spring-frontend/* /usr/share/nginx/html/
COPY init/custom/*.conf /etc/nginx/conf.d/
COPY init/custom/nginx.crt /etc/nginx/conf.d/
COPY init/custom/nginx.key /etc/nginx/conf.d/

COPY init/entry-point.sh /opt/entry-point.sh
RUN chmod +x /opt/entry-point.sh && sed -i -e 's/\r$//' /opt/entry-point.sh
ENTRYPOINT  ["/opt/entry-point.sh"]