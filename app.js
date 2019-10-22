const express = require("express");
const cron = require("node-cron");

const api = require("./routes/api/api.js");
const app = express();


cron.schedule("0 0 */1 * * *", () => {
  console.log("TEST");
}, {});


// app.get("/", (req, res) => {
//   res.send("Hi");
// });

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api", api);
app.use(express.static("public"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
