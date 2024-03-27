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
  console.log("HIT!");
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
  }})

userRouter.get('/user/current', async (req, res) => {
  console.log(req.session);
  if (!req.session.userId) {
    return res.status(401).send({ error: 'Not logged in' });
  }

  User.findOne({ where: { userId: req.session.userId } })
    .then(user => {
      if (user) {
        res.send({ user });
      } else {
        res.status(404).send({ error: 'User not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'Server error' });
    });})


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
    const currentUser = await User.findByPk(userId);
    // Check if currentUser exists in the database
    if (!currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    const friendsList = currentUser.friendsList || [];
    // Continue with the existing logic to find a non-friend user
    const allPotentialUsers = await User.findAll();
    const nonFriendUsers = allPotentialUsers.filter(u => {
      return u.userId !== userId && !friendsList.includes(u.userId.toString());
    });
  //   const randomUser = nonFriendUsers[Math.floor(Math.random() * nonFriendUsers.length)];
  //   if (!randomUser) {
  //     res.status(404).json({ message: 'No users available.' });
  //   } else {
  //     res.json({ user: randomUser });
  //   }
  res.json(nonFriendUsers)
} catch (error) {
  console.error("Error fetching random non-friend user:", error);
  res.status(500).send("Error fetching random non-friend user");
}});

userRouter.post('/api/edituserprofile/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { name, breed, bio } = req.body;
  const user = await User.findOne({ where: { userId } });
  if (user) {
    user.name = name;
    user.breed = breed;
    user.bio = bio;
    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

export default userRouter; 