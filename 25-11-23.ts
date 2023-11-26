/**
 * This problem was asked by Facebook.

Given a stream of elements too large to store in memory, 
pick a random element from the stream with uniform probability.

 */


const fs = require('fs')
const path = require('path')

(function () {

   class Storage {
       items : string[];
       constructor() {
        this.items = [];        
    }

    async add(name:string, blob:Blob) {
        const p = path.join(__dirname, name)

        try {
            await fs.writeFile(p, blob, (err:Error) => {
                console.error(err)
            })
            this.items.push(name)
        } catch (error) {
            console.error(error)
        }
        
    }

    async pickRandom() : Promise<Blob|undefined> {
        const random = Math.floor(Math.random()*this.items.length)
        const p = path.join(__dirname, this.items[random])
        try {
            const file = await fs.readFile(p, 'utf8') as Blob        
            return file
        } catch (error) {
            console.error(error)
        }
    }


   }
   
   
})()