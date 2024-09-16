import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';

@Injectable()
export class FacturaService {
  private facturas: CreateFacturaDto[] = [];

  findAll() {
    return this.facturas;
  }

  create(createFacturaDto: CreateFacturaDto) {
    this.facturas.push(createFacturaDto);
    return createFacturaDto;
  }

  findOne(codigofactura: number) {
    const factura = this.facturas.find(fact => fact.codigofactura === codigofactura);
    if (!factura) {
      return `Factura con código ${codigofactura} no encontrada.`;
    }
    return factura;
  }

  remove(codigofactura: number) {
    const facturaIndex = this.facturas.findIndex(fact => fact.codigofactura === codigofactura);
    
    if (facturaIndex === -1) {
      return `Factura con código ${codigofactura} no encontrada.`;
    }

    const removedFactura = this.facturas.splice(facturaIndex, 1);
    return `Factura con código ${codigofactura} eliminada con éxito.`;
  }
}
