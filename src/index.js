const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // dạng form html thì có cái này để xử lý
app.use(express.json()); // code từ js lên thì có cái này để xử lý

// XMLHttpRequest,

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// console.log("PATH:", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  console.log(
    "khi submit nó move sang trang news này, kèm theo parameters /news?q=move+to+news"
  );
  res.render("news");
});

app.get("/search", (req, res) => {
  // console.log("req.query :>> ", req.query.q);
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
