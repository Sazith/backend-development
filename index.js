let express = require("express");

require("dotenv").config()

const { checkToken } = require("./checkmiddlewareToken"); 

let app = express();

app.use(express.json()); // mandatory to include if use json
let PORT = process.env.PORT || 8003; // Changed to avoid port conflict


let password = "admin123"

console.log(process.env.MyToken);
console.log(process.env.PORT);



let checkPassword = (req, res, next) =>{
    // console.log("Welcome");
    // next()
    if(req.query.password == "" || req.query.password == undefined){
        return res.send({
            status: 0 ,
            msg : "Please Fill The Password"
        })
    }

    if(req.query.password != password){
        return res.send({
            status: 0 ,
            msg : "Please Fill the Correct Password"
        })
    }
    next()
}


app.use(checkPassword) /// middleware

// app.use((req, res, next) =>{ /// middleware

//         if(req.query.token == "" || req.query.token == undefined){
//             return res.send({
//                 status: 0 ,
//                 msg : "Please Fill The Token"
//             })
//         }
    
//         if(req.query.token != token){
//             return res.send({
//                 status: 0 ,
//                 msg : "Please Fill the Correct Token"
//             })
//         }
//         next()

// })

app.get("/", (req, res) => {
  // res.send({ status: 1, msg: "Home page API" })
  res.status(200).json({ status: 1, msg: "Home page API" });
});

app.get("/news",checkToken, (req , res) => {
  res.send({ status: 1, msg: "News API" });
});

app.get("/news/:id", (req, res) => {
  const currentId = req.params.id;
  res.send("News Details api" + currentId);
});

app.post("/login", (req, res) => {
  // res.send({
  //     status: 1,
  //     msg: "Login API",
  //     query: req.query,
  //     body:req.body
  // })
  res.status(200).json({
    status: 1,
    msg: "Login API",
    query: req.query,
    body: req.body,
  });
});
// {
//     "user_name":"sazid",
//     "password": "admin123"
//     }

// app.listen(PORT);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// 2 hour 0 min
