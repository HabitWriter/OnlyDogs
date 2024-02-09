import Subtopic from "./Subtopic.model.js";
import Topic from "./topic.model.js";
import Url from "./Urls.model.js";
import Project from "./Project.model.js";
import User from "./User.model.js";
import { db } from '../config/db.js';

const ProjectSubtopic = db.define('project_subtopic', {});

// User to Project relation
User.hasMany(Project,  { foreignKey: 'userId' });
Project.belongsTo(User, { foreignKey: 'userId' });

// User to Topic relation
User.hasMany(Topic,  { foreignKey: 'userId' });
Topic.belongsTo(User, { foreignKey: 'userId' });

// User to Subtopic relation
User.hasMany(Subtopic,  { foreignKey: 'userId' });
Subtopic.belongsTo(User, { foreignKey: 'userId' });

// Topic and Subtopic relation
Topic.hasMany(Subtopic,  { foreignKey: 'topicId' });
Subtopic.belongsTo(Topic, { foreignKey: 'topicId' });

// Project and Subtopic relation
Project.belongsToMany(Subtopic, { through: ProjectSubtopic,
foreignKey: {name: 'subtopicId', field: 'subtopic_id'}
});
Subtopic.belongsToMany(Project, { through: ProjectSubtopic,
    foreignKey: {name: 'projectId', field: 'project_id'}
});

// Subtopic and Url relation
Subtopic.hasMany(Url,  { foreignKey: 'subtopicId' });
Url.belongsTo(Subtopic, { foreignKey: 'subtopicId' });

export { Subtopic, Topic, Url, Project, User };