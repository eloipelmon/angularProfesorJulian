import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body/body.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductsComponent } from './products/products/products.component';
import { FooterComponent } from './footer/footer/footer.component';
import { InfoComponent } from './info/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosFormularioService } from './servicios-formulario.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiciosFormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
