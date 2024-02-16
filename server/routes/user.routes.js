import { Router } from 'express';
import {User, Post, Chat} from '../models/index.js';
import bcrypt from "bcryptjs";

const userRouter = Router();

userRouter.get('/all', async (req, res) => {
  const allUsers = await User.findAll({});
  res.json(allUsers);
});

userRouter.get('/api/users/:userId', async (req, res) => {
  User.findOne({ where: { userId: req.params.userId } }).then(user => res.send({ user }));
});

userRouter.post('/api/users', async (req, res) => {
  const { username: username, name: name, email: email, password: password, breed: breed} = req.body;
  console.log("you are here")
  bcrypt.hash(password, 8).then(hash => {
      User.create({ username: username, name: name, email: email, password: hash, breed: breed}).then(user => res.send({ user }))
  })
});

// subtopicRouter.post('/new', async (req, res) => {
//     const {title, topicId} = req.body;

//     const topic = await Topic.findOne({ where: {topicId : topicId}});

//     let subtopic = await Subtopic.create({ title : title}) 
//     await topic.addSubtopic(subtopic)
//     subtopic.topicId = topic.topicId

//     // Fetch the newly created subtopic with its urls
//     subtopic = await Subtopic.findOne({
//         where: { subtopicId: subtopic.subtopicId },
//         include: [{
//             model: Url,
//             as: 'urls'
//         }]
//     });


//     console.log(subtopic);
//     res.json(subtopic)
// });

// subtopicRouter.post('/edit', async (req, res) => {
//   const {subtopicId, changedField, change} = req.body;

//   const subtopic = await Subtopic.findOne({ where: {subtopicId : subtopicId},include: [{
//     model: Url,
//     as: 'urls'
// }]})
//   subtopic[changedField] = change
//   console.log(changedField);
//   console.log(change);
  
//   await subtopic.save();
//   console.log(subtopic);

//   res.json(subtopic);

// });

// subtopicRouter.patch('/edit-title', async (req, res) => {
//   const { subtopicId, newTitle } = req.body;

//   const subtopic = await Subtopic.findOne({ where: { subtopicId: subtopicId } });
  
//   if (!subtopic) {
//     return res.status(404).json({ error: 'Subtopic not found' });
//   }

//   subtopic.title = newTitle;
  
//   await subtopic.save();

//   res.json(subtopic);
// });

// subtopicRouter.delete('/delete/:subtopicId', async (req, res) => {
//   const { subtopicId } = req.params;

//   const subtopic = await Subtopic.findOne({ where: { subtopicId: subtopicId } });
  
//   if (!subtopic) {
//     return res.status(404).json({ error: 'Subtopic not found' });
//   }

//   await subtopic.destroy();

//   res.json({ message: 'Subtopic deleted successfully' });
// });


// subtopicRouter.get('/:movieId', async (req, res) => {
//   const { movieId } = req.params;
//   const movie = await Movie.findByPk(movieId);
//   res.json(movie);
// });

export default userRouter; 