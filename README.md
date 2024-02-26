# MONGO QUERIES

After the previous exercise about mongo, now lets deep in the features of this queries, very diferent and

To run mongoDB without installing MONGODB we need to pull image MongoDB from docker

```sh
docker pull mongo:6-jammy
```

Now we can run it in a container and create a bash within with the following command:

```sh
docker compose up -d mongo
```

adn then, to get a bash terminal within:

```sh
docker exec -it mongo-app bin/sh
```

Now we can access to `mongosh`, just typinig + ENTER it, we can see a `url` of server but it needs autorithation to access, so lets give it all it demands.

Credential MongoDB are set and can be found in `docker-compose.yml`

```sh
mongosh "mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4" --username root
```

then it shows up to write a password, that is save in your password `secret` and you have full access to the database MongoDB.

Now we can copy paste all commands in this terminal within this container or get the url server to another client, more comfortable than accept every kind of databases connection like [Dbeaver] (im in love) or new I spotted [Studio3T] perfect for free

[DBeaver]: https://dbeaver.com/dbeaver-lite/
[Studio3T]: https://studio3t.com/download/

To leave from terminal and then from container, just write `exit` 2 times.
