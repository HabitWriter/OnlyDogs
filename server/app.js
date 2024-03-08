import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import router from './routes/index.js';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { log } from 'console';



const app = express();
const ioServer = createServer(app);
const io = new Server(ioServer);

const port = '4090';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));
app.use(cors());
app.use(router);

io.on('connection', (socket) => {
    console.log(`User Selected:${socket.id}`)
})
ioServer.listen(3000, () => {
    console.log('Io Server listening on ')
})
ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
