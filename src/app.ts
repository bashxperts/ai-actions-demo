import express, { Express, Request, Response } from 'express';

const app: Express = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to AI Actions Demo API',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/hello/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({
    message: `Hello, ${name}!`,
    greeting: `Welcome to our Node.js app, ${name}`
  });
});

app.post('/api/echo', (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  res.json({
    received: message,
    echoed: message,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
