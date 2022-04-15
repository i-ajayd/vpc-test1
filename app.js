const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", (req, res) => res.send("Hello this is application (vpc-test1) created for vpv testing, deployed on faragate"));



app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!, retry this is with internal alb");
});

app.get("/access_alb",async (req, res) => {
  console.log('i am here')
  const {data}=await axios.get("http://internal-alb-vpc-test2-v3-948757348.ap-south-1.elb.amazonaws.com")
  console.log('i am here2')
  console.log(data)
  res.send(data);
});

