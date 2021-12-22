const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  let today = new Date();
  let options ={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day= today.toLocaleDateString("en-US",options);

  res.render("index",{
    tempDay:day
  });
});
app.post("/",(req,res)=>{
const item = req.body.newItem;
console.log(item);
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});