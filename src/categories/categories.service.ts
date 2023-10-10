import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  create(createCategoryDto: CreateCategoryDto) {
    return {
      message: 'Category has been added successfully',
      data: createCategoryDto,
    };
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return {
      message: `This action updates a #${id} category`,
      data: updateCategoryDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
