import {createClient} from 'ioredis'

const client = createClient()



async function main() {
    await client.connect()
    while(1){
        const res = await client.brPop("submission", 0)
        await new Promise((resolve)=> setTimeout(resolve, 1000))

        console.log("processed users submission")
    }
}

main()
