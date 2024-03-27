import lodash from 'lodash';
import { Chat, Comment, Message, Post, User } from '../models/index.js';
import { db } from '../config/db.js';
import bcrypt from "bcrypt";

import chatData from './data/chat.json' assert { type: 'json' };
import commentData from './data/comment.json' assert { type: 'json' };
import messageData from './data/message.json' assert { type: 'json' };
import postData from './data/post.json' assert { type: 'json' };
import userData from './data/user.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

// Create Seed Users

const userToCreate = [];
userData.forEach( async (userObject) => {

  userToCreate.push( await User.create(userObject))
})



// Create Seed Posts
const postToCreate = [];
postData.forEach((postObject) => {
    
    postToCreate.push(Post.create(postObject))
})

const postInDB = await Promise.all(postToCreate);

// console.log(postInDB);

  // console.log("_____________________________HERE______________________");
  
//   console.log(users);

// Create Seed Comments
const commentToCreate = [];
commentData.forEach((commentObject) => {
    
    commentToCreate.push(Comment.create(commentObject))
})

const commentInDB = await Promise.all(commentToCreate);

// console.log(commentInDB);


// Create Seed Chats
const chatToCreate = [];
chatData.forEach((chatObject) => {
    
    chatToCreate.push(Chat.create(chatObject))
})

const chatInDB = await Promise.all(chatToCreate);

// console.log(chatInDB);


// Create Seed Messages
const messageToCreate = [];
messageData.forEach((messageObject) => {
    
    messageToCreate.push(Message.create(messageObject))
})

const messageInDB = await Promise.all(messageToCreate);

// console.log(messageInDB);

// Add user and Chat Relations

const user1 = await User.findByPk(1);
const user2 = await User.findByPk(2);
const user3 = await User.findByPk(3);

const chat1 = await Chat.findByPk(1);
const chat2 = await Chat.findByPk(2);
const chat3 = await Chat.findByPk(3);

await user1.addChat(chat1);
await user1.addChat(chat2);

await user2.addChat(chat1);
await user2.addChat(chat2);
await user2.addChat(chat3);

await user3.addChat(chat1);
await user3.addChat(chat3);

const chats = await Chat.findAll({
    include: Message
  });

  const users = await User.findAll({
    include: Chat
  });

// console.log(chats);
// console.log(users);

async function hashPassword(user) {

  const rawPassword = user.password
  // console.log(rawPassword);
  const hashedPassword = await bcrypt.hash(rawPassword, 8);
  // console.log(hashedPassword);

  user.password = hashedPassword
  await user.save();

}

await hashPassword(user1)
await hashPassword(user2)
await hashPassword(user3)

await db.close();
console.log('Finished seeding database!');