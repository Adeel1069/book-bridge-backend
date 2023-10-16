import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelName, RatingSchema } from './schemas/rating.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ModelName, schema: RatingSchema }]),
  ],
  controllers: [RatingsController],
  providers: [RatingsService],
})
export class RatingsModule {}
