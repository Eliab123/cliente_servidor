var express =require('express');
var app =express();

app.get("/la_verdad",(req,res)=>
  req.send("<h1>Pues aqui va algo 8(</h1>")
);

app.listen(3000,()=>
  console.log("la app inicio en el puerto 3000...")
);
