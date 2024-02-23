import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import router from './routes/index.js';
import bcrypt from 'bcryptjs';
import User from './models/User.model.js';
import cors from 'cors';



const app = express();
const port = '4090';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));
app.use(cors());
app.use(router);

//Login post request
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      console.log(user);
      if (!user) {
        return res.status(401).send('Invalid credentials');
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send('Invalid credentials');
      }
      res.send({ user });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
