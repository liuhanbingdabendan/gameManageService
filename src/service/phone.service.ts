import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

@Provide()
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  // save
  async savePhoto() {
    // create a entity object
    const photo = new Photo();
    photo.name = 'tosaka rin';
    photo.magic = 10;
    photo.physical = 5;
    photo.type = 5;

    // save entity
    const photoResult = await this.photoModel.save(photo);

    // save success
    console.log('photo id = ', photoResult.id);
  }
}
