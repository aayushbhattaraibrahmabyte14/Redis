import client from './client.js'

async function init() {
    // await client.expire("age", 10)
    // const result = await client.get("name")
    
    // console.log(result, "Resss")
}


async function lists() {
  await client.lpush('messages', 1)
  await client.lpush('messages', 2)
  await client.lpush('messages', 3)
  await client.lpush('messages', 4)
  await client.lpush('messages', 5)
  const result = await client.blpop("messages", 30)
}

lists()
init()