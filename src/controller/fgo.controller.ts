import { Controller, Get, Inject, Query } from '@midwayjs/decorator';
import { FgoService } from '../service/fgo.service';
import { PhotoService } from '../service/phone.service';
// import { WeatherInfo } from '../interface';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class FgoController {
  @Inject()
  FgoService: FgoService;

  @Inject()
  PhotoService: PhotoService;

  @Inject()
  ctx: Context;

  @Get('/fgo')
  async getFgoInfo(@Query('id') cityId: string): Promise<void> {
    const result = await this.FgoService.getFgoInfo(cityId);
    if (result) {
      await this.ctx.render('info', result.weatherinfo);
    }
    // return this.FgoService.getFgoInfo(cityId);
  }

  @Get('/add')
  async getDetail(): Promise<string> {
    const result = await this.PhotoService.savePhoto();
    console.log(result, 'result');
    return '1111';
  }
}
