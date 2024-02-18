import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente-component.component.html',
  styleUrls: ['./cliente-component.component.css']
})
export class ClienteComponentComponent {
  clientes: any[] | undefined;

  constructor(private clienteService: ClienteServiceService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.listarClientes().subscribe(
      response => {
        this.clientes = response;
      },
      error => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }




}
