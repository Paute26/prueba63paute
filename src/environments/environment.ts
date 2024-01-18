
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'localhost:8080/prueba63paute/rs'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  buscarCedula(cedula: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscar-cedula/${cedula}`);
  }
}

