import { MidwayConfig } from '@midwayjs/core';
import { Photo } from '../entity/photo';
import { User } from '../entity/user';
import { Skill } from '../entity/skill';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1669277320758_2257',
  koa: {
    port: 7005,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  cors: {
    credentials: false,
  },
  webSocket: {
    port: 3000,
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '124.222.120.86',
        port: 3306,
        username: 'root',
        password: 'liu5211170.0',
        database: 'pyqt',
        synchronize: false,
        logging: false,
        entities: [Photo, User, Skill],
      },
    },
  },
} as MidwayConfig;
