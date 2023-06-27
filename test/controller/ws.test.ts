import { createApp, close } from '@midwayjs/mock'
// 这里使用的 Framework 定义，以主框架为准
import { Framework } from '@midwayjs/koa';

describe('/test/ws.test.ts', () => {

  it('should create app and test webSocket', async () => {
    const app = await createApp<Framework>();

    //...

    await close(app);
  });

});