import User from "./User.model.js";
import Post from "./Post.model.js";
import Chat from "./Chat.model.js";
import Message from "./Message.model.js";
import { db } from '../config/db.js';

const UserChat = db.define('user_chat', {});

// User to Post relation
User.hasMany(Post,  { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// User and Chat relation
User.belongsToMany(Chat, { through: UserChat, foreignKey: {name: 'userId', field: 'user_id'} });
Chat.belongsToMany(User, { through: UserChat, foreignKey: {name: 'chatId', field: 'chat_id'} });

// Chat and Messages relation
Chat.hasMany(Message,  { foreignKey: 'chatId' })
Message.belongsTo(Chat, { foreignKey: 'chatId' });

export { User, Post, Chat, Message };