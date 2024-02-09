import lodash from 'lodash';
import { Subtopic, Topic, Url, Project, User } from '../models/index.js';
import { db } from '../config/db.js';

import topicData from './data/topic.json' assert { type: 'json' };
import subtopicData from './data/subtopic.json' assert { type: 'json' };
import projectData from './data/project.json' assert { type: 'json' };
import urlData from './data/url.json' assert { type: 'json' };
import projectSubtopicData from './data/projectSubtopic.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

// Create Seed Users
const usersToCreate = [];
for (let i = 0; i < 1; i++) {
  const username = `user${i}@test.com`;
  usersToCreate.push(User.create({ username: username, password: 'test' }));
}

const usersInDB = await Promise.all(usersToCreate);

// console.log(usersInDB);

// Create Seed Topics

const topicInDB = await Promise.all(
    topicData.map((topic) => {
        const { title } = topic;
        const userId = usersInDB[0].userId

        const newTopic = Topic.create({
            title : title,
            userId : userId
        })

        return newTopic
    })
);

// console.log(topicInDB);

// Create Seed Projects

const projectInDB = await Promise.all(
    projectData.map((project) => {
        const { title } = project;
        const userId = usersInDB[0].userId

        const newProject = Project.create({
            title : title,
            userId : userId
        })

        return newProject
    })
);

// console.log(projectInDB);

// console.log(topicInDB);

// Create Seed Subtopics

const subtopicInDB = await Promise.all(
    subtopicData.map((subtopic) => {
        const { title, timeAccessed, codeExample, notes } = subtopic;
        const userId = usersInDB[0].userId
        
        
        

        const newSubtopic = Subtopic.create({
            title : title,
            userId : userId,
            timeAccessed : timeAccessed,
            codeExample : codeExample,
            notes: notes 
        })

        return newSubtopic
    })
);

const subtopics = await Subtopic.findAll()
const html = await Topic.findByPk(1)

const addTopicId = async (subtopic) => {
    await html.addSubtopic(subtopic);
  };
  
  for (const subtopic of subtopics) {
    await addTopicId(subtopic);
  }

// console.log(subtopicInDB);

// Create Seed URLS
let Div = await Subtopic.findByPk(1)


const urlInDB = await Promise.all(
    urlData.map( async (urlObj) => {
        const { url, text } = urlObj;
        const subtopicId = subtopicInDB[0].subtopicId
        
        const newUrl = await Url.create({
            url : url,
            text : text,
            subtopicId: 1,
        })
        
        await Div.addUrl(newUrl);
        
        newUrl.subtopicId = 1
        
        return newUrl
    })
    );
    
    Div = await Subtopic.findByPk(1, { include: [Url] }); // Fetch Div again, including associated Urls
    console.log(Div.urls);
    
    // console.log(urlInDB);

// Create Seed Middle Table

// const moviesInDB = await Promise.all(
//   movieData.map((movie) => {
//     const releaseDate = new Date(Date.parse(movie.releaseDate));
//     const { title, overview, posterPath } = movie;

//     const newMovie = Movie.create({
//       title: title,
//       overview: overview,
//       posterPath: posterPath,
//       releaseDate: releaseDate,
//     });

//     return newMovie;
//   }),
// );

// console.log(moviesInDB);


// const ratingsInDB = await Promise.all(
//   usersInDB.flatMap((user) => {
//     // Get ten random movies
//     const randomMovies = lodash.sampleSize(moviesInDB, 10);

//     // Create a rating for each movie
//     const movieRatings = randomMovies.map((movie) => {
//       return Rating.create({
//         score: lodash.random(1, 5),
//         userId: user.userId,
//         movieId: movie.movieId,
//       });
//     });

//     return movieRatings;
//   }),
// );

// console.log(ratingsInDB);

await db.close();
console.log('Finished seeding database!');