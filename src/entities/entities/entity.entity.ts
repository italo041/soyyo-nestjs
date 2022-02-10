import { ApiProperty } from '@nestjs/swagger';
export class Entity {
  @ApiProperty()
  entityId: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  identificationNumber: string;
  @ApiProperty()
  expirationDate: string;
  @ApiProperty()
  contactName: string;
  @ApiProperty()
  contactMail: string;
  @ApiProperty()
  logo: string;
  @ApiProperty()
  ipAddress: string;
}
