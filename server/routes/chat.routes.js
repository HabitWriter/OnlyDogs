import { Router } from 'express';
import {User, Post, Chat} from '../models/index.js';

const chatRouter = Router();

chatRouter.get('/all', async (req, res) => {
  const allChats = await Chat.findAll({});
  res.json(allChats);
});

// urlRouter.post('/new', async (req, res) => {
//     const {url, text, subtopicId} = req.body;

//     const subtopic = await Subtopic.findOne({ where: {subtopicId : subtopicId}});

//     const newUrl = await Url.create({ url : url, text : text}) 
//     await subtopic.addUrl(newUrl)

//     newUrl.subtopicId = subtopicId
//     console.log(subtopic);
//     console.log(newUrl);
//     res.json(newUrl)
// });

// urlRouter.post('/edit', async (req, res) => {
//   const {urlField, urlId, change} = req.body;

//   const url = await Url.findOne({ where: {urlId : urlId}})
//   url[urlField] = change
//   console.log(urlId);
//   console.log(change);
  
//   await url.save();
//   console.log(url);

//   res.json(url);

// });

// urlRouter.delete('/delete/:urlId', async (req, res) => {
//   const { urlId } = req.params;

//   const url = await Url.findOne({ where: { urlId: urlId } });
  
//   if (!url) {
//     return res.status(404).json({ error: 'Url not found' });
//   }

//   await url.destroy();

//   res.json({ message: 'Url deleted successfully' });
// });


export default chatRouter; 