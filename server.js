import express from "express"
import axios from "axios"
import client from "./client.js"
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())
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

app.post("/add", async(req, res)=>{
    console.log(req.body,"bady")
    const {full_name, email} = req.body
   await client.lpush("submission", JSON.stringify({full_name, email}))
    res.json({message:"Added"})
})
app.listen(3000, () => {
    console.log("server running on port: ", 3000)
})


