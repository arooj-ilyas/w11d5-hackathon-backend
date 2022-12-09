import express from "express";
const router = express.Router();

import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../models/posts.js";

//GET all Posts
router.get("/", async function (req, res) {
  const result = await getAllPosts();
  return res.json({ success: true, payload: result });
});

//CREATE a Post
router.post("/", async function (req, res) {
  const result = await createPost(req.body);
  return res.json({ success: true, payload: result });
});

//UDPATE a Post
router.patch("/:id", async function (req, res) {
  const result = await updatePost(req.body, req.params.id);
  return res.json({ success: true, payload: result });
});

//DELETE a Post
router.delete("/:id", async function (req, res) {
  const result = await deletePost(req.params.id);
  return res.json({ success: true, payload: result });
});


export default router;
