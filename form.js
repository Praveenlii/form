const http=require('http')
const fs=require('fs')
const path=require('path')
http.createServer((req,res)=>{
     const url=req.url;
     const method=req.method;
     if (url==='/') {
        res.setHeader('content-type','text/html')
        const messagefile = fs.readFileSync(path.join(__dirname, 'message.html'));
        res.write(messagefile);
        return res.end();
     }
     if (url==='/message'&& method=="POST") {
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            console.log(parsedbody)
            
        })
        res.setHeader('Location','/');
        res.statusCode=302;
        return res.end();
     }
     
}).listen(3000);