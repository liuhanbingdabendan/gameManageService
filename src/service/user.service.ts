import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
  async getAllUser(id = '') {
    // const photo = new User();
    // photo.name = 'tosaka rin';
    // photo.password = '10';

    // // save entity
    // const photoResult = await this.userModel.save(photo);
    // console.log(photoResult);
    // const user = new User();
    console.log(111, this.userModel.find);
    // const allUser = await this.userModel.find({});
    const allUser = await this.userModel.findOne({
      where: { usename: id },
    });
    console.log(allUser);
    return allUser;
  }
  async edit(params: any) {
    console.log('edit');
    if (params.id) {
      // 编辑
      let allUser = await this.userModel.findOne({
        where: { usename: params.id },
      });
      allUser = {
        id: params.id,
        usename: params.username,
        password: params.password,
      };
      await this.userModel.save(allUser);
    } else {
      // 新增
      await this.userModel.save(params);
    }
  }
}
