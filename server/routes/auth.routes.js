import { Router } from "express";
import User from "../models/User.model.js";
import bcrypt from 'bcrypt';

const authRouter = Router();
authRouter.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  const isMatch = await bcrypt.compare(password, user.password);
  if (user && isMatch) {
    req.session.userId = user.userId;
    console.log(user);
    res.json({ success: true, user: user });
  } else {
    res.json({ success: false });
  }
});
// loginRequired middleware function
function loginRequired(req, res, next) {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
}

authRouter.post('/api/logout', loginRequired, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});
export default authRouter;