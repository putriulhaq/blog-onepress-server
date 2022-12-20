const express = require("express");
const router = express.Router();
const Posts = require("../models/Post");

router.get("/posts", (req, res) => {
  res.send([
    {
      categories: "Painting",
      createdAt: "14-12-2022",
      desc: "this is what are we now",
      title: "Expressionism",
      updatedAt: "14/12/2022",
      username: "reyvido",
      image:
        "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      __v: 0,
      _id: "im28uywp",
    },
    {
      categories: "Sculpture",
      createdAt: "12-12-2022",
      desc: "this is who are we now",
      title: "Valk",
      updatedAt: "14/12/2022",
      username: "reyvido",
      image:
        "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      __v: 0,
      _id: "im28uywp",
    },
    {
      categories: "Fashion",
      createdAt: "10-12-2022",
      desc: "this is where are we now",
      title: "Haute Couture",
      updatedAt: "14/12/2022",
      username: "reyvido",
      image:
        "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      __v: 0,
      _id: "im28uywp",
    },
  ]);
});

router.delete("/posts/delete/:postId", (req, res) => {
  const { postId } = req.params;
  const getPost = Posts.find({ postId });
  if (getPost.length > 0) {
    Posts.deleteOne({ postId });
  }
  return res.status(200).send({
    message: "Your post has been deleted",
  });
});



module.exports = router;
