const Post = require("../models/Schema");
require("../models/config");
module.exports = {
  // Getting Home Page

  home: async (req, res) => {
    try {
      let posts = await Post.find();
      res.json(posts);
    } catch (err) {
      console.log(err, "error in Home");
    }
  },
  //   Post Data in Database or Page

  homePost: async (req, res) => {
    try {
      console.log(req.body);
      const { title, name } = req.body;
      let db = new Post({
        title,
        name,
      });
      let data = await db.save();
      res.json(data);
    } catch (err) {
      console.log(err, "error in HOme Post");
    }
  },
  //   Find Specific Data with id

  IdPost: async (req, res) => {
    try {
      let id = req.params.id;
      let postes = await Post.findById(id);
      res.json(postes);
    } catch (err) {
      console.log(err, "Error In Find with id");
    }
  },

  //   Delete Data with id
  DeletePost: async (req, res) => {
    try {
      let posts = await Post.deleteOne({ _id: req.params.id });
      res.json(posts);
    } catch (err) {
      console.log(err, "Error in Deleting Post");
    }
  },
  //   Update title with id
  UpdatePost: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedPost = await Post.updateOne(
        { _id: id },
        { $set: { title: req.body.title } }
      );
      res.json(updatedPost);
    } catch (err) {
      console.log(err, "Error in Update Post");
    }
  },
};
