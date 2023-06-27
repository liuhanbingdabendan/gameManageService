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
  async editData(@Body() params: any): Promise<responseType> {
    const result = await this.UserService.edit(params);
    console.log(result, 'result');
    return {
      code: 200,
      data: result,
    };
  }
  @Post('/deleteUser')
  async deleteData(@Body('id') id: string): Promise<responseType> {
    const result = await this.UserService.deleteUser({ id });
    console.log(result, 'result');
    if (result) {
      return {
        code: 200,
        data: result,
      };
    }
    return {
      code: 500,
      data: '删除的用户不存在',
    };
  }
  @Post('/getSkill')
  async getSkill(): Promise<responseType> {
    const result = await this.UserService.getSkill();
    console.log(result, 'getSkill result');
    return {
      code: 200,
      data: result,
    };
  }
}
