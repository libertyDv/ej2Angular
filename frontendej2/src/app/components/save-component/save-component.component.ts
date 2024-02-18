import { Component } from '@angular/core';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-save-component',
  templateUrl: './save-component.component.html',
  styleUrls: ['./save-component.component.css']
})
export class SaveComponentComponent {

  cliente: any = {};

  constructor(private clienteService: ClienteServiceService) { }

  guardarCliente(): void {
    this.clienteService.guardarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente guardado exitosamente', response);
      },
      error => {
        console.error('Error al guardar cliente', error);
      }
    );
  }


}
