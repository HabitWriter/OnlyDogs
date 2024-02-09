import { Router } from 'express';
import { Subtopic, Topic } from '../models/index.js';

const topicRouter = Router();

topicRouter.get('/all', async (req, res) => {
  const allTopics = await Topic.findAll();
  res.json(allTopics);
});

topicRouter.post('/new', async (req, res) => {
    const {title} = req.body;

    const topic = await Topic.create({title : title}) 
    
    res.json(topic)
});

topicRouter.post('/edit', async (req, res) => {
  const {topicId, title} = req.body;

  const topic = await Topic.findOne({ where: {topicId : topicId}})

  topic.title = title
  
  await topic.save();
  console.log(topic);

  res.json(topic);

});

topicRouter.delete('/delete/:topicId', async (req, res) => {
  const { topicId } = req.params;

  const topic = await Topic.findOne({ where: { topicId: topicId } });
  console.log(topic);
  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' });
  }

  await topic.destroy();

  res.json({ message: 'Topic deleted successfully' });
});

export default topicRouter; 