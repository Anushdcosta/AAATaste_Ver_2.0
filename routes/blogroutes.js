const express = require("express");
const Blog = require("../models/bloger");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json()); // Ensure you can parse JSON bodies if needed

// On first load This page opens
router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {blogs: result, webpage: 0  });
    })
    .catch((err) => {
      console.log("err");
    });
});

// This page loads the playlist with all the chicken recipes
router.get("/chicken", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", {blogs: result, webpage: 1 , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the seafood recipes
router.get("/seafood", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", {blogs: result, webpage: 2 , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the mutton recipes
router.get("/Mutton", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", {blogs: result, webpage: 3  , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});

// This page loads the playlist with all the vegetable recipes
router.get("/vegetable", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", {blogs: result, webpage: 4 , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});

// This page loads the playlist with all the sweets recipes
router.get("/sweets", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", {blogs: result, webpage: 5 , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});

// This page loads the playlist with all the drinks recipes
router.get("/drinks", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", { blogs: result, webpage: 6  , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});

// This page loads the playlist with all the recipes
router.get('/all_videos?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  Blog.find()
    .then((result) => {
      res.render("allview", { blogs: result, webpage: 0 , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});

// This page loads an individual page for any of the recipes clicked based on the id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.find().then((mainresult) => {
    Blog.findById(id)
      .then((result) => {
        res.render("details", {
          blogs: mainresult,
          blog: result,
          title: "blog details",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
