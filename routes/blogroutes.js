const express = require("express");
const Blog = require("../models/bloger");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json()); // Ensure you can parse JSON bodies if needed


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
router.get("/chicken", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("allview", {blogs: result, webpage: 1  , startlimit: 0, endlimit: 6});
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/seafood", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("allview", {blogs: result, webpage: 2  , startlimit: 0, endlimit: 6});
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/Mutton", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("allview", {blogs: result, webpage: 3  , startlimit: 0, endlimit: 6});
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/vegetable", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("allview", {blogs: result, webpage: 4  , startlimit: 0, endlimit: 6});
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/sweets", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("allview", {blogs: result, webpage: 5  , startlimit: 0, endlimit: 6});
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/drinks", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("allview", { blogs: result, webpage: 6  , startlimit: 0, endlimit: 6});
    })
    .catch((err) => {
      console.log("err");
    });
});


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
