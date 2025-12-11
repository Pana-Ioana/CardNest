import express, {json} from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(json());
app.use(cors());
app.use(morgan('dev'));

app.get('/ping', (req, res) => {
  res.json({ message: 'The server is up and running!',
    status: 'ok',
    time: new Date().toLocaleTimeString(),
    timestamp: new Date().toISOString() });

    console.log('Ping request received at', new Date().toISOString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
