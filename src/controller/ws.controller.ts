import {
  WSController,
  OnWSConnection,
  Inject,
  OnWSMessage,
  WSBroadCast,
  OnWSDisConnection,
} from '@midwayjs/core';
import { Context } from '@midwayjs/ws';
import * as http from 'http';

@WSController()
export class HelloSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async onConnectionMethod(socket: Context, request: http.IncomingMessage) {
    console.log(`namespace / got a connection ${this.ctx.readyState}`);
  }

  @OnWSMessage('message')
  @WSBroadCast()
  async gotMessage(data: any) {
    console.log(data, 'data');
    // setInterval(() => {
    //   console.log(111111);
    //   return '22222';
    // }, 10);
    let timer = null;
    if (this.ctx.readyState === 1) {
      timer = setInterval(() => {
        this.ctx.send('11111');
      }, 1000);
      console.log('true');
    } else {
      clearInterval(timer);
    }
    // return { name: 'harry', result: parseInt(data) + 5 };
  }

  @OnWSDisConnection()
  async disconnect(id: number) {
    console.log('disconnect ' + id);
  }
}
