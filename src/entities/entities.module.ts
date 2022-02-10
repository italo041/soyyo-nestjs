import { Module } from '@nestjs/common';
import { EntitiesController } from './controllers/entities.controller';
import { EntitiesService } from './services/entities.service';

@Module({
  imports: [],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
