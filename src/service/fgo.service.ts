import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { FgoEmptyDataError } from '../error/fgo.error';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

@Provide()
export class FgoService {
  @InjectEntityModel(Photo)
  fgoModal: Repository<Photo>;

  async saveFgo() {
    const FGO = new Photo();
    FGO.name = 'liuhanbing';
    console.log(this, this.fgoModal, 'this.fgoModal');
    const result = await this.fgoModal.save(FGO);
    console.log('fgo id=', result.id);
  }
  async getFgoInfo(cityId: string): Promise<WeatherInfo> {
    if (!cityId) {
      throw new FgoEmptyDataError();
    }
    try {
      const result = await makeHttpRequest(
        `http://www.weather.com.cn/data/cityinfo/${cityId}.html`,
        {
          dataType: 'json',
        }
      );
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {
      throw new FgoEmptyDataError(error);
    }
  }
}
