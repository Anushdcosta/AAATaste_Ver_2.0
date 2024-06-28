const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogroutes = require("./routes/blogroutes");
const User = require("./models/account");
const Blog = require("./models/bloger");

const app = express();

const port = 3000;
const dburi =
  "mongodb+srv://anush:Thephoenix1230984576@cluster0.pqnqxux.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dburi)
  .then((results) =>
    app.listen(process.env.Port || port, () =>
      console.log(`listening on port ${port}`)
    )
  )
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("<h1> Home page </h1>");
  res.redirect("/blogs");
});

app.use("/blogs", blogroutes);

app.get("/videos", (req, res) => {
  res.render("videos", { title: "videos" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
app.post("/blogs", (req, res) => {
  const blog = new User(req.body);
  blog.save().then((results) => {
    res.redirect("/blogs");
  });
});
app.post("/blogs/:id", (req, res) => {
  const comment = req.body.comments;
  console.log(comment);
  const id = req.params.id;
  Blog.updateOne(
    { _id: id }, // Replace "document_id" with the id of the document you want to update
    { $push: { comments: comment } }
  ).then((result) => {
    res.redirect(`/blogs/${id}`);
  });
});
