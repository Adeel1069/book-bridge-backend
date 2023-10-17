import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingModel, RatingSchema } from './schemas/rating.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RatingModel, schema: RatingSchema }]),
  ],
  controllers: [RatingsController],
  providers: [RatingsService],
})
export class RatingsModule {}
