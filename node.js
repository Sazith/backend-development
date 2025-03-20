let http = require("http")

let server = http.createServer ((req,res) =>{

    if(req.url == "/news"){ // http://localhost:8000/news
        let obj ={
            status: 1, 
            data:[
                {
                    newsTitle : 'wscube',
                    newsDescrip: "Hello World"
                },
                {
                    newsTitle : 'wscube tech',
                    newsDescrip: "Hello World Update"
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }
    if(req.url == "/about"){ // http://localhost:8000/about
        es.end("This is about section")
    }
    if(req.url == "/course"){

    }
    if(req.url == "/"){ // http://localhost:8000
        res.end('Welcome to ws')
    }


})
 
server.listen("8000") // http://localhost:8000