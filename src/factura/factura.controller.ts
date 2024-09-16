import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';

@Controller('facturas')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @Get()
  findAll() {
    return this.facturaService.findAll();
  }

  @Get(':codigofactura')
  findOne(@Param('codigofactura') codigofactura: string) {
    return this.facturaService.findOne(Number(codigofactura)); // Convertir a número
  }

  @Post()
  create(@Body() createFacturaDto: CreateFacturaDto) {
    return this.facturaService.create(createFacturaDto);
  }

  @Delete(':codigofactura')
  remove(@Param('codigofactura') codigofactura: string) {
    return this.facturaService.remove(Number(codigofactura)); // Convertir a número
  }
}
