import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ObjectIdValidation } from 'src/pipes/object-id-validation.pipe';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create(createRatingDto);
  }

  @Get()
  findAll() {
    return this.ratingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ObjectIdValidation) id: string) {
    return this.ratingsService.findOne(id);
  }

  @Get('book-ratings/:id')
  findBookRatings(@Param('id', ObjectIdValidation) id: string) {
    return this.ratingsService.findBookRatings(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(
    @Param('id', ObjectIdValidation) id: string,
    @Body() updateRatingDto: UpdateRatingDto,
  ) {
    return this.ratingsService.update(id, updateRatingDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ObjectIdValidation) id: string) {
    return this.ratingsService.remove(id);
  }
}
