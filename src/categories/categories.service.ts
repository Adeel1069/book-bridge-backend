import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName } from './schemas/category.schema';
import { Model } from 'mongoose';
import { ICategory } from './interfaces/category.interface';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(ModelName) private categoryModel: Model<ICategory>,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<{ success: boolean }> {
    const isCategoryExist = await this.categoryModel.findOne({
      name: createCategoryDto.name,
    });
    if (isCategoryExist)
      throw new ForbiddenException(
        'Category already exists. Please choose a different name.',
      );

    const newCategory = new this.categoryModel(createCategoryDto);
    await newCategory.save();
    return {
      success: true,
    };
  }

  async findAll(): Promise<ICategory[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async findOne(id: string): Promise<ICategory> {
    const category = await this.categoryModel.findById({ _id: id });
    if (!category) throw new NotFoundException();
    return category;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<{ success: boolean }> {
    const updatedCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      updateCategoryDto,
      { new: true },
    );
    if (!updatedCategory) throw new NotFoundException();
    return {
      success: true,
    };
  }

  async remove(id: string): Promise<{ success: boolean }> {
    const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
    if (!deletedCategory) throw new NotFoundException();
    return {
      success: true,
    };
  }
}
