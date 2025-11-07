const express = require("express")
const app = express();
const products =require("./products.json")

app.get("/",(req,res)=>{
    res.send("this is main root")
})

app.get("/prod/:id",(req,res)=>{

    const prod = products.find((t)=>{
        if(t.id==req.params.id){
            return true;
        }
    });

    console.log(prod)
const html = 
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
img{
    width:300px;
    height:250px;
    border:1px solid grey;
}
    body{
    border:2px solid black;
    text-align:center;
    padding-top:0px;
    
}
    table{
        width:100%;
        height:100%;
    }

h1{
    color:red;
}

div{
    background-color:grey;
}
</style>
<body >
    <div>
    <h1>${prod.title}</h1>
    <h2>category : ${prod.category}</h2>
    <img width: src="${prod.images}" alt="${prod.title}">

    <table border="2px">
        <tr>
            <td>${prod.description}</td>
            
            
        </tr>
        
        <tr><td>PRICE: ${prod.price}/-</td></tr>
        <tr><td>RATING: ${prod.rating}</td></tr>
        <tr><td>MIN ORDER QTY:${prod.minimumOrderQuantity}</td></tr>
    </table>
    </div>
</body>
</html>
        `;
        res.send(html)
});

app.listen(4900,()=>{
    console.log("server is running on port : 4900")
})