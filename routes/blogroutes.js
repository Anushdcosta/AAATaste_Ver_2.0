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
// This page loads the playlist with all the recipes
router.get('/all_videos?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        if ("0" in blog.categ) {
          numofelem = numofelem + 1;
        }
      });
      console.log(numofelem)
      res.render("allview", {numofelem: numofelem, name: "all_videos",  blogs: result, webpage: "0" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the chicken recipes
router.get("/chicken?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "1") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      console.log(numofelem)
      res.render("allview", {numofelem: numofelem, name: "chicken", blogs: result, webpage: "1", startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the seafood recipes
router.get("/seafood?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "2") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "seafood",blogs: result, webpage: "2" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the mutton recipes
router.get("/Mutton?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "3") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {name: "mutton",blogs: result, webpage: "3"  , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the vegetable recipes
router.get("/vegetable?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "4") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "vegetable", blogs: result, webpage: "4" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});

// This page loads the playlist with all the sweets recipes
router.get("/sweets?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "5") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "sweets",blogs: result, webpage: "5" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the drinks recipes
router.get("/drinks?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "6") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "drinks", blogs: result, webpage: "6"  , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// stopped here
// This page loads the playlist with all the recipes
router.get('/breakfast?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "7") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "breakfast", blogs: result, webpage: "7" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get("/pork?", (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "8") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "pork", blogs: result, webpage: "8" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
      console.log("err");
    });
});
// This page loads the playlist with all the recipes
router.get('/egg?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "9") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "egg",  blogs: result, webpage: "9" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/pizza?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "10") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "pizza", blogs: result, webpage: "10" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/monthi?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "11") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "monthi", blogs: result, webpage: "11" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/postnatal?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "12") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "postnatal",  blogs: result, webpage: "12" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/cakes', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "13") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "cakes",  blogs: result, webpage: "13", startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/starter?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "14") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "starter",  blogs: result, webpage: "14" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/pickles?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "15") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "pickles",  blogs: result, webpage: "15" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/rice?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "16") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "rice", blogs: result, webpage: "16" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/evening?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "17") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "evening", blogs: result, webpage: "17" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the recipes
router.get('/special?', (req, res) => {
  console.log(req.query)
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "18") {
            console.log(true);
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "special", blogs: result, webpage: "18" , startlimit: startlimit, endlimit: endlimit});

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
