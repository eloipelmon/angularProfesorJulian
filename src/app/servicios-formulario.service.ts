import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable()
export class ServiciosFormularioService {

  constructor() { }

  products: Product[]=[];

  public sendProducts(nombre:string, apellido1:string, apellido2:string, email:string, telefono:string, telefono2:string, dni:string, fNacimiento:Date, curso:string, adulto:boolean):Observable<Product[]>{
    if(nombre != "" && apellido1 != "" && email != "" && telefono != "" && dni != "" &&  curso != "" ){
      this.products.push({
        nombre:nombre,
        apellido1:apellido1,
        apellido2:apellido2,
        email:email,
        telefono:telefono,
        telefono2:telefono2,
        dni:dni,
        fNacimiento:fNacimiento,
        curso:curso,
        adulto:adulto
      });
    }
    return of(this.products);
  }
}
export interface Product {nombre:string; apellido1:string; apellido2:string; email:string; telefono:string; telefono2:string; dni:string; fNacimiento:Date; curso:string; adulto:boolean;}