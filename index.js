import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 8888;
const host = '127.0.0.1';

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define custom logging format with Morgan
morgan.format('custom', ':date[iso] :method :url - :response-time ms - IP: :remote-addr');

// Use Morgan for logging requests
app.use(morgan('custom'));

// Sample route handlers
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});


// Start the server
app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`);
});
