import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { FilterEntityDto } from '../dtos/filters.dto';
import { Entity } from '../entities/entity.entity';
import config from 'src/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EntitiesService {
  constructor(
    private httpService: HttpService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async filter(payload: FilterEntityDto) {
    const { startId, endId } = payload;
    const entities: Entity[] = [];
    const entitiesNotValid = [];

    for (let entityId = startId; entityId <= endId; entityId++) {
      const entity = await this.findEntity(entityId);
      const { code, data } = entity;

      if (code === 'F132' && data !== undefined) {
        entities.push(data);
      }
      if (code === 'F133') {
        entitiesNotValid.push(entityId);
      }
    }

    if (entitiesNotValid.length > 0) {
      throw new NotFoundException(
        `Not found entities with id ${entitiesNotValid}`,
      );
    }

    entities.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return entities;
  }

  async findEntity(id: number): Promise<any> {
    const entities = this.httpService.get(
      `${this.configService.API_URL}/entity/v2.1/entities/${id}`,
    );
    const data = await (await firstValueFrom(entities)).data;
    return data;
  }
}
