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
    
    });
});

// This page loads the playlist with all the recipes
router.get('/all_videos?', (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 6;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        if ("0" in blog.categ) {
          numofelem = numofelem + 1;
        }
      });
    
      res.render("allview", {numofelem: numofelem, name: "All",  blogs: result, webpage: "0" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
// This page loads the playlist with all the chicken recipes
router.get("/chicken?", (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "1") {
          
            numofelem = numofelem + 1;
          }
        });
      });
    
      res.render("allview", {numofelem: numofelem, name: "chicken", blogs: result, webpage: "1", startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});
// This page loads the playlist with all the seafood recipes
router.get("/seafood?", (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "2") {
          
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "seafood",blogs: result, webpage: "2" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});
// This page loads the playlist with all the mutton recipes
router.get("/Mutton?", (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "3") {
          
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {name: "mutton",blogs: result, webpage: "3"  , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});
// This page loads the playlist with all the vegetable recipes
router.get("/vegetable?", (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "4") {
          
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "vegetable", blogs: result, webpage: "4" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});

// This page loads the playlist with all the sweets recipes
router.get("/sweets?", (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "5") {
          
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "sweets",blogs: result, webpage: "5" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});
// This page loads the playlist with all the drinks recipes
router.get("/drinks?", (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "6") {
          
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "drinks", blogs: result, webpage: "6"  , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});
// stopped here
// This page loads the playlist with all the recipes
router.get('/breakfast?', (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "7") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "8") {
          
            numofelem = numofelem + 1;
          }
        });
      });
      res.render("allview", {numofelem: numofelem, name: "pork", blogs: result, webpage: "8" , startlimit: startlimit, endlimit: endlimit});
    })
    .catch((err) => {
    
    });
});
// This page loads the playlist with all the recipes
router.get('/egg?', (req, res) => {

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "9") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "10") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "11") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "12") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "13") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "14") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "15") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "16") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "17") {
          
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

  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "18") {
          
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
// This page loads the playlist with all the recipes
router.get('/beef?', (req, res) => {
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  Blog.find()
    .then((result) => {
      result.forEach(blog => {
        blog.categ.forEach(category => {
          if (category == "19") {
          
            numofelem = numofelem + 1;
          }
        });
      });
    res.render("allview", {numofelem: numofelem, name: "beef", blogs: result, webpage: "19" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/nonveg?', (req, res) => {
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  const targetCategories = ["1", "2", "3", "8", "9", "19"];
  Blog.find()
    .then((result) => {
    res.render("viewer", {numofelem:2,targetcat: targetCategories, name: "nonveg", blogs: result, webpage: "30" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});
router.get('/AZrecipes?', (req, res) => {
  const startlimit = req.query["startlimit"] || 0; // price_descending
  const endlimit = req.query["endlimit"] || 7;
  numofelem = 0;
  
  const targetCategories = ["6", "7","9","10","11","12","13","14","15","16","17", "18"];
  Blog.find()
    .then((result) => {
    res.render("viewer", {targetcat: targetCategories, name: "A-Z", blogs: result, webpage: "31" , startlimit: startlimit, endlimit: endlimit});

    })
    .catch((err) => {
      console.error(err);
    });
});

// const blogSchema = new mongoose.Schema({
//   name: String,
//   thumb: String,
//   link: String,
//   Ingredients: String,
//   recipe: String,
//   comments: [
//     {
//       email: String,
//       rating: Number,
//       comment: String
//     }
//   ]
// });

// const Blog = mongoose.model('Blog', blogSchema);


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
      
      });
  });
});



module.exports = router;