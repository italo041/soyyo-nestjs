import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, Max, IsInt } from 'class-validator';
export class FilterEntityDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly startId: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly endId: number;
}
