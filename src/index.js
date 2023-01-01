const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
