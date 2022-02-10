import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FilterEntityDto } from '../dtos/filters.dto';
import { Entity } from '../entities/entity.entity';
import { EntitiesService } from '../services/entities.service';

@ApiTags('entities')
@Controller('entities')
export class EntitiesController {
  constructor(private readonly entityService: EntitiesService) {}

  @Post('/filter')
  @ApiOperation({ summary: 'Filter entities' })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  @ApiNotFoundResponse({
    description: 'Not found',
  })
  @ApiOkResponse({
    status: 200,
    type: [Entity],
  })
  @HttpCode(200)
  filter(@Body() payload: FilterEntityDto) {
    return this.entityService.filter(payload);
  }
}
