import request from 'supertest';
import { app, server } from '../src/index';


describe('Number Endpoint', () => {
  afterAll((done: jest.DoneCallback) => {
    if (server) {
      server.close(done);
    } else {
      done(); 
    }
  });

  it('should set number', async () => {
    const response = await request(app)
      .post('/number')
      .send({ num: 123, userID: 'user1' });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Number set successfully');
  });

  it('should return 400 if num is missing', async () => {
    const response = await request(app)
      .post('/number')
      .send({ userID: 'user1'});
    expect(response.status).toBe(400);
  });

  it('should return 400 if userID is missing', async () => {
    const response = await request(app)
      .post('/number')
      .send({ num: 123 });
    expect(response.status).toBe(400);
  });
});
