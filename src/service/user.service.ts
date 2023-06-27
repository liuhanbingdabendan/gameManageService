import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../entity/user';
import { Skill } from '../entity/skill';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;
  @InjectEntityModel(Skill)
  skillModel: Repository<Skill>;
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
    // const allUser = await this.userModel.find({});
    let allUser: any = [];
    if (id) {
      allUser = await this.userModel.findOne({
        where: { usename: id },
      });
    } else {
      allUser = await this.userModel.find({});
    }
    console.log(allUser);
    return allUser;
  }
  async edit(params: any) {
    console.log('edit', params);
    if (params.id) {
      // 编辑
      let allUser = await this.userModel.findOne({
        where: { id: params.id },
      });
      allUser = {
        ...allUser,
        usename: params.username,
        password: params.password,
      };
      console.log(allUser, 'allUser');
      const result = await this.userModel.save(allUser);
      return result;
    } else {
      // 新增
      const result = await this.userModel.save(params);
      return result;
    }
  }
  async deleteUser(params: any) {
    console.log('删除', params);
    if (params.id) {
      const photoToRemove = await this.userModel.findOne({
        where: { id: params.id },
      });
      console.log(photoToRemove);
      if (photoToRemove) {
        const result = await this.userModel.remove(photoToRemove);
        return result;
      }
      return false;
    }
  }
  async getSkill(params?: any) {
    console.log(params);
    const skillObj = new Skill();
    skillObj.knowledge = '1';
    skillObj.charm = '1';
    skillObj.courage = '1';
    skillObj.flexible = '1';
    skillObj.physique = '1';
    const userObj = new User();
    userObj.usename = '测试123';
    userObj.password = '测试123';
    console.log(this.skillModel, User, Skill);
    const result = await this.skillModel.save(skillObj);
    await this.userModel.save(userObj);
    return result;
  }
}
