import request from 'supertest';
import {app} from '../src/index';

describe('Result Endpoint', () => {
  it('should return result', async () => {
    await request(app).post('/character').send({ char: 'A', userID: 'user1' });
    await request(app).post('/number').send({ num: 123, userID: 'user1' });
    const response = await request(app).get('/user1');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('A_123');
  });

  it('should return 400 if character or number is missing', async () => {
    const response = await request(app).get('/user2');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing character or number');
  });
});
