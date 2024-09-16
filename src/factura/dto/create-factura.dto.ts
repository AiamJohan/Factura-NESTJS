import { IsString, IsNumber } from 'class-validator';

export class CreateFacturaDto {
  @IsNumber()
  codigofactura: number;

  @IsString()
  nombrefactura: string;

  @IsString()
  fechafactura: string;
}