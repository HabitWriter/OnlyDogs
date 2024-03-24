import { Router } from 'express';
import bcrypt from "bcryptjs";
import { User, Post, Chat } from '../models/index.js';


const userRouter = Router();

function loginRequired(req, res, next) {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
}


userRouter.get('/all', async (req, res) => {
  const allUsers = await User.findAll({});
  res.json(allUsers);
});

userRouter.get('/api/user/:userId', async (req, res) => {
  User.findOne({ where: { userId: req.params.userId } }).then(user => res.send({ user }));
});

userRouter.post('/api/user', async (req, res) => {
  console.log(req.body); // Log request body for debugging
  const { username, name, email, password, breed } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ username, name, email, password: hashedPassword, breed });
    res.send({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("There was an error creating the user.");
  }
});

//Display friends 
userRouter.get('/api/friends', async (req, res) => {
  try {
      // Fetch the specific user
      const user = await User.findOne();

      // Check if the user has friendsList
      if (!user.friendsList || user.friendsList.length === 0) {
          return res.json({ friendsArray: [] }); // Return an empty array if no friendsList
      }
      // For each userId in the user's friendsList, find the corresponding User and gather required info
      const friendsArray = await Promise.all(user.friendsList.map(async (userId) => {
          const friend = await User.findByPk(userId); 
          if (!friend) return null; 
          return {
              userId: friend.userId,
              name: friend.name,
              image: friend.profilePic 
          };
      }));
      // Remove any potential null values that could have appeared if a friend wasn't found
      const cleanFriendsArray = friendsArray.filter(friend => friend !== null);
      res.json({ friendsArray: cleanFriendsArray });
  } catch (error) {
      console.error("Error fetching friends:", error);
      res.status(500).send("Error fetching friends");
  }
});

// Delete friend
userRouter.delete('/api/friends/:friendId', async (req, res) => {
  const userId = req.session.userId; 
  const friendId = req.params.friendId;

  try {
      // Retrieve the user
      const user = await User.findByPk(userId);
      if (!user) {
          return res.status(404).send({ success: false, message: "User not found" });
      }
    
      // Filter out the friendId from the user's friendsList
      const updatedFriendsList = user.friendsList.filter(id => id !== friendId);
    
      // Update user with the new friendsList
      user.friendsList = updatedFriendsList;
      await user.save();
    
      res.send({ success: true, message: "Friend removed successfully" });
  } catch (error) {
      console.error("Error removing friend:", error);
      res.status(500).send({ success: false, message: "Error removing friend" });
  }
});

userRouter.get('/api/randomNotFriend', async (req, res) => {
  try {
    const userId = req.session.userId;
    // Check if userId exists hence user is logged in.
    // if (!userId) {
    //   return res.status(401).json({ message: 'User not logged in' });
    // }
    const user = await User.findByPk(userId);
    // Check if user exists in the database
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const friendsList = user.friendsList || [];
    // Continue with the existing logic to find a non-friend user
    const allPotentialUsers = await User.findAll();
    const nonFriendUsers = allPotentialUsers.filter(u => {
      return u.userId !== userId && !friendsList.includes(u.userId.toString());
    });
    const randomUser = nonFriendUsers[Math.floor(Math.random() * nonFriendUsers.length)];
    if (!randomUser) {
      res.status(404).json({ message: 'No users available.' });
    } else {
      res.json({ user: randomUser });
    }
  } catch (error) {
    console.error("Error fetching random non-friend user:", error);
    res.status(500).send("Error fetching random non-friend user");
  }
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