const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use('/static',express.static('static'))

app.set("view engine","ejs")

app.use("/", product);

app.get("/tp",(req,res)=>{

	res.render('index')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
