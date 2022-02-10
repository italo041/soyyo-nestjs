import { IsNotEmpty, Min, Max, IsInt } from 'class-validator';

export class FilterEntityDto {
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly startId: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly endId: number;
}
