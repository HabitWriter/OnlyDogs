import { Router } from 'express';
import {User, Comment, Post, Chat} from '../models/index.js';

const commentRouter = Router();

// commentRouter.get('/all', async (req, res) => {
//   const allComments = await Comment.findAll({});
//   res.json(allComments);
// });

commentRouter.post("/like", async (req,res) => {
  const {commentId} = req.body;
  // console.log(commentId);
  const currentComment = await Comment.findByPk(commentId)

  // console.log(req.body);
  // console.log(currentComment);
  currentComment.likes++

  currentComment.save();

  res.json(currentComment);

})

commentRouter.post("/new", async (req,res) => {
  const {userId, body, postId} = req.body;
  const currentUser = await User.findByPk(userId)
  const currentPost = await Post.findByPk(postId)
  const newComment = await Comment.create({ body: body})
  await currentUser.addComment(newComment)
  await currentPost.addComment(newComment)

  // Reload the post to include the associated user
  const commentWithUser = await Comment.findByPk(newComment.commentId, {
      include: [
          {
              model: User,
              as: "user", // Optional: this will alias the relation as 'user' in the returned data
          },
      ]
  })
  // console.log(commentWithUser);
  res.json(commentWithUser)
})

export default commentRouter; 