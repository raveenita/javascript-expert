docker run \
    --name postgres \
    -e POSTGRES_USER=USERNAME \
    -e POSTGRES_PASSWORD="PASSWORD0001" \
    -e POSTGRES_DB=postgresDB \
    -p 5432:5432 \
    -d \
    postgres

docker logs postgres
docker exec -it postgres psql -U USERNAME -d PASSWORD0001 --dbname postgresDB
CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR(255), NOT NULL);
SELECT * FROM warriors;

# mongo db

docker run \
    --name mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=USERNAME \
    -e MONGO_INITDB_ROOT_PASSWORD="PASSWORD0001" \
    -p 27017:27017 \
    -d \
    mongo:4