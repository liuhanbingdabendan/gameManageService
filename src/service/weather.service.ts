import { Provide } from '@midwayjs/decorator';
import { makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherEmptyDataError } from '../error/weather.error';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    if (!cityId) {
      throw new WeatherEmptyDataError();
    }

    try {
      const result = await makeHttpRequest(
        `http://www.weather.com.cn/data/sk/${cityId}.html`,
        {
          dataType: 'json',
        }
      );
      if (result.status === 200) {
        return {
          weatherinfo: {
            city: '1',
            cityid: '2',
            temp: 'string',
            WD: 'string',
            WS: 'string',
            SD: 'string',
            AP: 'string',
            njd: 'string',
            WSE: 'string',
            time: 'string',
            sm: 'string',
            isRadar: 'string',
            Radar: 'string',
          },
        };
      }
    } catch (error) {
      throw new WeatherEmptyDataError(error);
    }
  }
}
