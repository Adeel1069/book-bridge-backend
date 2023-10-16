import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class ObjectIdValidation implements PipeTransform<string> {
  transform(value: string) {
    if (!mongoose.isValidObjectId(value)) {
      throw new BadRequestException('Invalid ID');
    }
    return value;
  }
}
