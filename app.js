const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", (req, res) => res.send("Hello this is application (vpc-test1) created for vpv testing, deployed on faragate"));



app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!, retry");
});

app.get("/access_alb",async (req, res) => {
  const {data}=await axios.get("http://nlb-vpc-test2-5fa65a1afc079eb1.elb.ap-south-1.amazonaws.com")
  res.send(data);
});

