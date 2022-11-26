const express = require ("express");
const cors = require("cors");
const jwt = require('jsonwebtoken')

const studentmodel = require("./model/students")
const DATA = require('./model/user') // DB of blg

const app = new express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


const port = process.env.PORT || 8000;




app.post('/api/studententry', async (req, res)=>{
    let data = req.body
    const student = new studentmodel(data)
    await student.save((error,data)=>{
        if (error){
            res.json({"status":"error"})
        }
        else {
            res.json({"status":"success","entry":data})
        }
    })
})

app.post('/api/studentviewall', (req, res)=>{
    
    studentmodel.find((error,data)=>{
        if (error){
            res.json({"status":"error"})
        }
        else {
            res.json(data)
        }
    })
})

app.post('/api/studentupdate', async (req, res)=>{
    let data = req.body
    await studentmodel.findOneAndUpdate({"admno":req.body.admno}, data)
    res.send(data)
})

app.post('/api/studentsearch', (req, res)=>{
    
    studentmodel.find({"name":req.body.name},      
        (error,data)=>{
        if (error){
            res.json({"status":"error"})
        }
        else {
            res.send(data)
        }
    })
})

app.delete('/api/studentdelete', (req, res)=>{
    console.log(`data to be deleted ${req.body}`)

    studentmodel.deleteOne({"_id":req.body._id},(error,data)=>{
        if (error){
            res.json({"status":"error"})
        }
        else {
            console.log(`data to be deleted ${req.body}`)
            res.send(data)
        }
    })
})

// -
// -
// -
// -
// -USER API-
// -
// -
// -
// -


app.post('/api/login',(req,res)=>{
    let userData=req.body;
    var flag=false;

    DATA.find().then(function(user){
        console.log("user",user);
        
        for(let i=0;i<user.length;i++){
                            console.log("found user",user[i].email);

            if(userData.email==user[i].email && userData.password==user[i].password){
                console.log("found user",user[i].email);

                flag=true;
                break;
            }else{
                flag=false;
            }
        }
        if(flag==true){
            let payload={subject:userData.email+userData.password}
            let token =jwt.sign(payload,"secretKey");
            res.status(200).send({token});
            }
            else{
                res.status(401).send("invalid credentials")
            }
        
    });


});




//post nre user
app.post('/api/user', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            email: req.body.email,
            password: req.body.password
        }


        const newUser = new DATA(item) //to check incoming data
        const saveUser = await newUser.save() //mongoDB save

        res.send(saveUser)


    } catch (error) {

        console.log(error)
    }
})

app.listen(port);