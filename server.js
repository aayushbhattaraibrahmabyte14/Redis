import express from "express"
import axios from "axios"
import client from "./client"
const app = express()
app.get('/', async(req, res)=> {
    try {
        const cache = await client.get('todos')
        if(cache){
            return res.json(JSON.parse(cache))
        }else{

            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            await client.set("todos",JSON.stringify(data))
            await client.expire("todos", 30)
        return res.json(data)
        }
        
    } catch (error) {
        console.log(error, "sjdfhsdbfd")
    }
})
app.listen(3000, () => {
    console.log("heuhsfhisaf")
})

// (async function listen() {
//     console.log(data)
// })()
