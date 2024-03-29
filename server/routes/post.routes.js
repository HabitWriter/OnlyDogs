import { Router } from "express";
import { User, Post, Chat, Comment } from "../models/index.js";

const postRouter = Router();

postRouter.get("/all", async (req, res) => {
    const allPosts = await Post.findAll({
        include: [
            {
                model: Comment,
                as: "comments", // Optional: this will alias the relation as 'comments' in the returned data
                include: [
                    {
                        model: User,
                        as: "user", // Optional: this will alias the relation as 'user' in the returned data
                    },
                ],
            },
            {
                model: User,
                as: "user", // Optional: this will alias the relation as 'user' in the returned data
            },
        ],
    });
    res.json(allPosts);
});

postRouter.post("/like", async (req,res) => {
  const {postId} = req.body;
  const currentPost = await Post.findByPk(postId)

  // console.log(req.body);
  // console.log(currentPost);
  currentPost.likes++

  currentPost.save();

  res.json(currentPost);

})

postRouter.post("/new", async (req,res) => {
    const {userId, body, image} = req.body;
    const currentUser = await User.findByPk(userId)
    const newPost = await Post.create({ body: body, image: image})
    await currentUser.addPost(newPost)

    // Reload the post to include the associated user
    const postWithUser = await Post.findByPk(newPost.postId, {
        include: [
            {
                model: Comment,
                as: "comments", // Optional: this will alias the relation as 'comments' in the returned data
                include: [
                    {
                        model: User,
                        as: "user", // Optional: this will alias the relation as 'user' in the returned data
                    },
                ],
            },
            {
                model: User,
                as: "user", // Optional: this will alias the relation as 'user' in the returned data
            },
        ]
    })
    // console.log(postWithUser);
    res.json(postWithUser)
})

// topicRouter.post('/new', async (req, res) => {
//     const {title} = req.body;

//     const topic = await Topic.create({title : title})

//     res.json(topic)
// });

// topicRouter.post('/edit', async (req, res) => {
//   const {topicId, title} = req.body;

//   const topic = await Topic.findOne({ where: {topicId : topicId}})

//   topic.title = title

//   await topic.save();
//   console.log(topic);

//   res.json(topic);

// });

// topicRouter.delete('/delete/:topicId', async (req, res) => {
//   const { topicId } = req.params;

//   const topic = await Topic.findOne({ where: { topicId: topicId } });
//   console.log(topic);
//   if (!topic) {
//     return res.status(404).json({ error: 'Topic not found' });
//   }

//   await topic.destroy();

//   res.json({ message: 'Topic deleted successfully' });
// });

export default postRouter;
