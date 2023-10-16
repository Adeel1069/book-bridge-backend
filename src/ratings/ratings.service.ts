import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName } from './schemas/rating.schema';
import { Model } from 'mongoose';
import { IRating } from './interfaces/rating.interface';

@Injectable()
export class RatingsService {
  constructor(@InjectModel(ModelName) private ratingModel: Model<IRating>) {}

  async create(
    createRatingDto: CreateRatingDto,
  ): Promise<{ success: boolean }> {
    const newRating = new this.ratingModel(createRatingDto);
    await newRating.save();
    return {
      success: true,
    };
  }

  async findAll(): Promise<IRating[]> {
    const ratings = await this.ratingModel.find();
    return ratings;
  }

  async findOne(id: string): Promise<IRating> {
    const rating = await this.ratingModel.findById({ _id: id });
    if (!rating) throw new NotFoundException();
    return rating;
  }

  async findBookRatings(id: string): Promise<IRating[]> {
    const bookRatings = await this.ratingModel.find({ bookId: id });
    return bookRatings;
  }

  async update(
    id: string,
    updateRatingDto: UpdateRatingDto,
  ): Promise<{ success: boolean }> {
    const updatedRating = await this.ratingModel.findByIdAndUpdate(
      id,
      updateRatingDto,
    );
    if (!updatedRating) throw new NotFoundException();
    return {
      success: true,
    };
  }

  async remove(id: string): Promise<{ success: boolean }> {
    const deletedRating = await this.ratingModel.findByIdAndDelete(id);
    if (!deletedRating) throw new NotFoundException();
    return {
      success: true,
    };
  }
}
