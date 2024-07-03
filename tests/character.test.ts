import request from 'supertest';
import {app} from '../src/index';

describe('Character Endpoint', () => {
  it('should set character', async () => {
    const response = await request(app)
      .post('/character')
      .send({ char: 'A', userID: 'user1' });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Character set successfully');
  });

  it('should return 400 if char missing', async () => {
    const response = await request(app)
      .post('/character')
      .send({ userID: 'user1' });
    expect(response.status).toBe(400);
  });

  it('should return 400 if userID is missing', async () => {
    const response = await request(app)
      .post('/character')
      .send({ char: 'A' });
    expect(response.status).toBe(400);
  });
});
