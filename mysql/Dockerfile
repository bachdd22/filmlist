FROM mysql

ENV MYSQL_ROOT_PASSWORD=hehe

EXPOSE 3306

COPY ./schema.sql /docker-entrypoint-initdb.d/
