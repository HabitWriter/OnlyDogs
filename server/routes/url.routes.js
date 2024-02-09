import { Router } from 'express';
import { Subtopic, Topic, Url } from '../models/index.js';

const urlRouter = Router();

urlRouter.get('/all', async (req, res) => {
  const allSubtopics = await Subtopic.findAll({ include: [Url] });
  res.json(allSubtopics);
});

urlRouter.post('/new', async (req, res) => {
    const {url, text, subtopicId} = req.body;

    const subtopic = await Subtopic.findOne({ where: {subtopicId : subtopicId}});

    const newUrl = await Url.create({ url : url, text : text}) 
    await subtopic.addUrl(newUrl)

    newUrl.subtopicId = subtopicId
    console.log(subtopic);
    console.log(newUrl);
    res.json(newUrl)
});

urlRouter.post('/edit', async (req, res) => {
  const {urlField, urlId, change} = req.body;

  const url = await Url.findOne({ where: {urlId : urlId}})
  url[urlField] = change
  console.log(urlId);
  console.log(change);
  
  await url.save();
  console.log(url);

  res.json(url);

});

urlRouter.delete('/delete/:urlId', async (req, res) => {
  const { urlId } = req.params;

  const url = await Url.findOne({ where: { urlId: urlId } });
  
  if (!url) {
    return res.status(404).json({ error: 'Url not found' });
  }

  await url.destroy();

  res.json({ message: 'Url deleted successfully' });
});


export default urlRouter; 