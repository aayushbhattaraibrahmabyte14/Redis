# Redis

Redis is the openn source, in-memory data store used by millions of developers as a database, streaming engine and message broker and data structure server.
Whenever the user ask for data, the server asks redis if there is available data which user asks for and if there is no data than the server query the database, the results will store in redis as a cache for the future and return to the user.
Redis runs in 6379 PORT by default.

To install redis stack. (Redis stack is the GUI for redis and this is not from production. we can just visualize data from redis-stack.)
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

To access redis stack in docker simply open docker deamon
if you have linux install portainer:

sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

sudo docker pull portainer/portainer-ce
sudo docker run -d -p 8000:8000 -p 9443:9443 --name=portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer-ce

Now you can access portainer from http://localhost:9443

Now you can access redis stack from browser
To access the redis stack:
1. View the first redis stack PORT on portainer
2. Access redis stack from http://localhost:PORT

To connect redis server
1. docker exec -it <CONTAINER_ID> bash (You can get container id by prompting docker ps)
2. redis-cli
Now you can interact with Redis server


* Redis datatypes:
1. String
2. Lists
3. Sets
4. JSON
5. Hashes
6. Probabilistic
7. Bitmaps
8. Streams etc. 

Getting and Setting String
1. SET - Store the string value
2. SETNX - Store the string value if it is not already exist
3. MSET - It sets multiple values in one operation.
4. GET - Get the string value
5. MGET - It gets multiple values in one operation

   We can set count of the data by: SET count <number>

* We can set value to redis server by: set <entity>:<id> <value> (Make conventiaonal keys for good practice)
And get value by: get <key>
Note: You can add, get, update and delete these values in redis-stack too. 

