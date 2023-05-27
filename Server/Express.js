const { response } = require('express'); 
const express = require('express') 
const {MongoClient}=require('mongodb') 
const cors = require('cors')
const app = express() 
app.use(cors())
app.use(express.json())
const uri="mongodb+srv://exploria:exploria123@cluster0.pfottme.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri); 
client.connect(); 
const db=client.db("sdp"); 
const con=db.collection("c"); 
 
 
const a = (a, b) => { 
 a= a+10; 
 return a+b; 
} 
 
app.get('/',(request,response) => { 
 response.send('<h1>The updated b value is '+a(10,20)+'</h1>') 
}) 
 
app.post("/",(request,response)=> { 
 console.log(request.body) 
 con.insertOne(request.body) 
 response.send("saved succesfully") 
}) 

app.get('/check',(request,response)=>{
    console.log(request.query)
    async function find(){
        try{
            const result=await col.findOne({email:request.query.un})
            console.log(result)
            if(result===null){
                response.send("Fail")
            }
            else{
                if(result.password===request.query.pw){
                    response.send("Pass")
                }
                else{
                    response.send("Fail")
                }
            }
        }
        finally{

        }
    }
    find().catch(console.dir)
    
})
 
app.listen(8081) 
//localhost:8081 
console.log("server started")
