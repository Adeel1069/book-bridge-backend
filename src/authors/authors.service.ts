import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  create(createAuthorDto: CreateAuthorDto) {
    return {
      message: 'This action adds a new author',
      data: createAuthorDto,
    };
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return {
      message: `This action updates a #${id} author`,
      data: updateAuthorDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
