import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EntitiesController } from './controllers/entities.controller';
import { EntitiesService } from './services/entities.service';

@Module({
  imports: [HttpModule],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
