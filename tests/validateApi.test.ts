import request from 'supertest';
import app from '../src/app';

describe('POST /api/validate', () => {
  it('should return 200 and valid: true for a valid card number', async () => {
    const response = await request(app)
      .post('/api/validate')
      .send({ cardNumber: '4242424242424242' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ valid: true });
  });

  it('should return 200 and valid: false for an invalid card number', async () => {
    const response = await request(app)
      .post('/api/validate')
      .send({ cardNumber: '1234567890123456' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ valid: false });
  });

  it('should return 400 for a missing cardNumber in payload', async () => {
    const response = await request(app).post('/api/validate').send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('is required');
  });

  it('should return 400 when cardNumber is not a string', async () => {
    const response = await request(app)
      .post('/api/validate')
      .send({ cardNumber: 1234567890123456 });

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('must be a string');
  });
});
