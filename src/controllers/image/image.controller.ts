import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ImageService } from 'src/services/image/image.service';
import { Image } from 'src/Entities/image.entity';

@Crud({
    model: {
      type: Image,
    },
  })
@Controller('image')
export class ImageController {
    constructor(public service: ImageService) {}
}
