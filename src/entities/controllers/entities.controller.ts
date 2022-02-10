import { Body, Controller, Post } from '@nestjs/common';
import { FilterEntityDto } from '../dtos/filters.dto';
import { EntitiesService } from '../services/entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entityService: EntitiesService) {}

  @Post('/filter')
  filter(@Body() payload: FilterEntityDto) {
    return this.entityService.filter(payload);
  }
}
