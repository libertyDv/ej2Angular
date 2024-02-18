import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {



  constructor(private http: HttpClient) { }

  guardarCliente(cliente: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/clientes/save', cliente);
  }

  listarClientes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/clientes');
  }
}
