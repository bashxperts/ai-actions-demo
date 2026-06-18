import request from 'supertest';
import app from '../src/app';

describe('Express API Tests', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toContain('Welcome');
    });

    it('should return version', async () => {
      const res = await request(app).get('/');
      expect(res.body).toHaveProperty('version');
      expect(res.body.version).toBe('1.0.0');
    });
  });

  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status');
      expect(res.body.status).toBe('healthy');
    });

    it('should include timestamp', async () => {
      const res = await request(app).get('/api/health');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/hello/:name', () => {
    it('should return greeting with name', async () => {
      const res = await request(app).get('/api/hello/John');
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Hello, John!');
    });

    it('should handle different names', async () => {
      const res = await request(app).get('/api/hello/Alice');
      expect(res.body.message).toBe('Hello, Alice!');
    });
  });

  describe('POST /api/echo', () => {
    it('should echo the message', async () => {
      const res = await request(app)
        .post('/api/echo')
        .send({ message: 'Hello World' });
      expect(res.status).toBe(200);
      expect(res.body.echoed).toBe('Hello World');
    });

    it('should return 400 when message is missing', async () => {
      const res = await request(app)
        .post('/api/echo')
        .send({});
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
    });

    it('should include timestamp in response', async () => {
      const res = await request(app)
        .post('/api/echo')
        .send({ message: 'Test' });
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('404 handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('error');
    });
  });
});
