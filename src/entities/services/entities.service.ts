import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { FilterEntityDto } from '../dtos/filters.dto';
import { Entity } from '../entities/entity.entity';

@Injectable()
export class EntitiesService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  private entities: Entity[] = [
    {
      entityId: 1,
      name: 'Hola',
      contactEmail: 'hi@example.com',
      contactName: 'hola',
      expirationDate: '2022-02-22',
      identificationNumber: '231231',
      logo: 'adas',
    },
  ];

  filter(payload: FilterEntityDto) {
    console.log(this.configService.API);

    return this.entities;
  }
}
