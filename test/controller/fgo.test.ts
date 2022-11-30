import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/weather.test.ts', () => {
  let app: Application;
  beforeAll(async () => {
    app = await createApp<Framework>();
  })
  afterAll(async () => {
    await close(app);
  })
  it ('should test /fgo with success request', async () => {
    const result = await createHttpRequest(app).get('/fgo').query({ id: '101010100' });
    expect(result.status).toBe(200);
    expect(result.text).toMatch(/北京/);
  });
  it ('should test /fgo with fail request', async () => {
    const result = await createHttpRequest(app).get('/fgo');
    expect(result.status).toBe(200);
    expect(result.text).toMatch(/fgo data is empty/);
  })
})