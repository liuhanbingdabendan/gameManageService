import { Controller, Get, Inject, Query, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { responseType } from '../interface';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;
  @Inject()
  UserService: UserService;

  @Get('/')
  async getUser(@Query('id') id: string): Promise<responseType> {
    const result = await this.UserService.getAllUser(id);
    console.log(result);
    return {
      code: 200,
      data: result,
    };
  }

  @Post('/test')
  async getBodyData(@Body('uid') uid: string): Promise<responseType> {
    const result = await this.UserService.getAllUser();
    console.log(result);
    return {
      code: 200,
      data: result,
    };
  }

  @Post('/edit')
  async editData(@Body('id') id: string): Promise<responseType> {
    console.log(id);
    const result = await this.UserService.getAllUser();
    console.log(result);
    return {
      code: 200,
      data: result,
    };
  }
}
