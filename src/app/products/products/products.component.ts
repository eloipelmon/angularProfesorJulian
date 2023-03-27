import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosFormularioService } from 'src/app/servicios-formulario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  products: Product[] = [];
  productNombre: string = "";
  productApellido: string = "";
  productApellido2: string = "";
  productEmail: string = "";
  productTelefono: string = "";
  productTelefono2: string = "";
  productDni: string = "";
  productFNacimiento: Date = new Date();
  productCurso: string = "";
  productAdulto: boolean = true;


  nombre: FormControl = new FormControl('', Validators.required);
  apellido1: FormControl = new FormControl('', Validators.required);
  apellido2: FormControl = new FormControl('');

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  telefono: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.required]);
  telefono2: FormControl = new FormControl('');
  dni: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.required]);

  fNacimiento: FormControl = new FormControl('', Validators.required);
  curso: FormControl = new FormControl('', Validators.required);
  adulto: FormControl = new FormControl('', [Validators.required]);

  MyNewForm: FormGroup = new FormGroup(
    {
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,

      email: this.email,
      telefono: this.telefono,
      telefono2: this.telefono2,
      dni: this.dni,

      fNacimiento: this.fNacimiento,
      curso: this.curso,
      adulto: this.adulto
    });


  eighteenYearsAgo: string;
  constructor(private servicioFormulario: ServiciosFormularioService) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    this.eighteenYearsAgo = date.toISOString();
  }

  ngOnInit(): void { }

  Clic(FormGroup: any) {
    this.servicioFormulario.sendProducts(
      this.MyNewForm.value.nombre,
      this.MyNewForm.value.apellido1,
      this.MyNewForm.value.apellido2,
      this.MyNewForm.value.email,
      this.MyNewForm.value.telefono,
      this.MyNewForm.value.telefono2,
      this.MyNewForm.value.dni,
      this.MyNewForm.value.fNacimiento,
      this.MyNewForm.value.curso,
      this.MyNewForm.value.adulto
    )
    console.log(FormGroup);
    (this.MyNewForm as FormGroup).reset();
  }

  simpleAlert() {
    Swal.fire('¡Te has inscrito correctamente!');
  }
}


export interface Product { nombre: string; apellido1: string; apellido2: string; email: string; telefono: string; telefono2: string; dni: string; fNacimiento: Date; curso: string; adulto: boolean; }