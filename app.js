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
  const {data}=await axios.get("http://internal-alb-vpc-test2-v3-948757348.ap-south-1.elb.amazonaws.com")
  res.send(data);
});

