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
1. View the last redis stack PORT on portainer
2. Access redis stack from http://localhost:PORT

To connect redis server
1. docker exec -it <CONTAINER_ID> bash (You can get container id by prompting docker ps)
2. redis-cli
Now you can interact with Redis server


# Redis datatypes:
1. String
2. Lists
3. Sets
4. JSON
5. Hashes
6. Probabilistic
7. Bitmaps
8. Streams etc. 


# 1. String
## Getting and Setting String
A single Redis string can be maximum of 512MB
1. SET - Store the string value
2. SETNX - Store the string value if it is not already exist
3. MSET - It sets multiple values in one operation.
4. GET - Get the string value
5. MGET - It gets multiple values in one operation

We can set count of the data by: SET <key> <number>
increment values by:
     incr <key> 
And we can increament value how much we want by:
incrby <key> <increament-value>

* We can set value to redis server by: set <entity>:<id> <value> (Make conventiaonal keys for good practice)
And get value by: get <key>
Note: You can add, get, update and delete these values in redis-stack too. 

For Node.js we can use ioredis. IoRedis is the full feature Redis client
To install ioredis in your project:
- npm install ioredis
Setup client for Redis in node js:

import {Redis} from 'ioredis'
//This hit redis server in 6379 PORT by default
const client = new Redis()
export default client

Use client to get values by Redis:

import client from './client.js'
async function init() {
    await client.set("user:1","Hello 123")
    const result = await client.get("age")
    console.log(result, "Resss")
}
init()

- To Set expiry date of the keys in Redis:

import client from './client.js'
async function init() {
    await client.expire("age", 10) //The age key will be expired after 10 seconds
}
init()

-Whenever the user request data to the server, the server always asks for data to Redis and the Redis provides same data to the server so we have to Reset the Redis after some time for getting fresh data.

# Lists
Lists are basically likes an array. Lists are used to implement stacks and queues.Build queue management for background worker systems.

## commands for lists:
1. LPUSH -  it adds the new elements from the head.
2. RPUSH -  it add the new elements from the tail
3. LPOP  -  it remove and return an element from the head of a list
4. RPOP -   it remove and return an element from the tail of a list
5. LLEN  -  returns the length of the list
6. LMOVE -  automatically moves the elements from one list to another
7. LRANGE - extracts a range of elements from the list
8. LTRIM -  reduces a list to the specified range of elements

If you add from head and remove from tail it will be a queue and if you add from head and also remove value from head it will be a stack


Blocking commands:
BLPOP: It removes and returns the element from the head. If there is no elements in that lists it waits for the time that we give to the command and if it doesnot found it returns nill.

