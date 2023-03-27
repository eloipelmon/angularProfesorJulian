import { Component } from '@angular/core';
import { ServiciosFormularioService } from 'src/app/servicios-formulario.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {


  filterTable(): void { 
    let td: HTMLElement | null, txtValue: string; 
    let input: string = (document.getElementById("filtro") as HTMLInputElement).value; 
    let filter: string = input.toUpperCase(); 
    let table: HTMLElement | null = document.getElementById("miTabla"); 
    let tr: HTMLCollectionOf<HTMLTableRowElement> = table?.getElementsByTagName("tr") as HTMLCollectionOf<HTMLTableRowElement>; 
    for (let i: number = 0; i < tr.length; i++) { 
      td = tr[i].getElementsByTagName("td")[0]; 
      if (td) { 
        txtValue = td.textContent || td.innerText; 
        if (txtValue.toUpperCase().indexOf(filter) > -1) { 
          tr[i].style.display = ""; 
        } else { tr[i].style.display = "none"; 
          } 
      } 
    } 
  }


  products: Product[] = [];
  productNombre: string = "";
  productApellido1: string = "";
  productApellido2: string = "";
  productEmail: string = "";
  productTelefono: string = "";
  productTelefono2: string = "";
  productDni: string = "";
  productFNacimiento: Date = new Date();
  productCurso: string = "";
  productAdulto: boolean = true;

  inversionProducts: Product[] = [];
  altacocinaProducts: Product[] = [];
  inglesProducts: Product[] = [];
  conduccionProducts: Product[] = [];

  constructor(private servicioFormulario: ServiciosFormularioService) { }

  ngOnInit(): void {
    this.servicioFormulario.sendProducts(
      this.productNombre,
      this.productApellido1,
      this.productApellido2,
      this.productEmail,
      this.productTelefono,
      this.productTelefono2,
      this.productDni,
      this.productFNacimiento,
      this.productCurso,
      this.productAdulto).subscribe((products: Product[]) => {
        this.products= products;
        this.inversionProducts = products.filter(product => product.curso === 'inversiones');
        this.altacocinaProducts = products.filter(product => product.curso === 'altacocina');
        this.inglesProducts = products.filter(product => product.curso === 'ingles');
        this.conduccionProducts = products.filter(product => product.curso === 'conduccion');
      });

  }
}

export interface Product { nombre: string; apellido1: string; apellido2: string; email: string; telefono: string; telefono2: string; dni: string; fNacimiento: Date; curso: string; adulto: boolean; }