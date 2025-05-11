// 2.0 Now from the documentation of express js in below click hello world
// 2.1 apply the function according to the doc

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

// 2.4 now creating another path for example
app.get("/data", (req, res) => {
  res.send("more data coming soon");
});

// 2.5 now in terminal press Ctrl + c to stop server then run again  node index.js then in browser url type after localhost:5000/data. and refresh the browser. If u updata anything in any path. every time u should follow this. this is for temporary use only.

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// 2.3 now to run it use in opened terminal type node index.js and type in browser url localhost:5000 and u will show Hello world
