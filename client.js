import {Redis} from 'ioredis'

//This hit redis server in 6379 PORT by default
const client = new Redis()

export default client