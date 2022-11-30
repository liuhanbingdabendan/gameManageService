import { MidwayConfig } from '@midwayjs/core';
import { Photo } from '../entity/photo';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1669277320758_2257',
  koa: {
    port: 7005,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '47.119.157.171',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'world',
        synchronize: false,
        logging: false,
        entities: [Photo],
      },
    },
  },
} as MidwayConfig;
