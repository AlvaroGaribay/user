import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Note } from '../models/Note'
import {Reserv} from '../models/Reserv' 
import { Observable } from 'rxjs';
import { Hab } from '../models/Hab'


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  API_URI= 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(`${this.API_URI}/notes`);
  }

  getNote(id: String) {
    return this.http.get(`${this.API_URI}/notes/${id}`);
  }

  deleteNote(id: string) {
    return this.http.delete(`${this.API_URI}/notes/${id}`);
  }

  saveNote(note: Note) {
    return this.http.post(`${this.API_URI}/notes`, note);
  }

  updateNote(id: string|number, updatedNote: Note): Observable<Note> {
    return this.http.put(`${this.API_URI}/notes/${id}`, updatedNote);
  }

  //Reservaciones
  getReservs(): Observable<any> {
    return this.http.get(`${this.API_URI}/reservaciones`);
  }

  getReserv(id: String): Observable<any> {
    return this.http.get(`${this.API_URI}/reservaciones/${id}`);
  }

  deleteReserv(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/reservaciones/${id}`);
  }

  saveReserv(reserv: Reserv): Observable<any> {
    return this.http.post(`${this.API_URI}/reservaciones`, reserv);
  }

  updateReserv(id: string|number, updatedReserv: Reserv): Observable<any> {
    return this.http.put(`${this.API_URI}/reservaciones/${id}`, updatedReserv);
  }
  
  //Habitaciones
  getHabs(): Observable<any> {
    return this.http.get(`${this.API_URI}/habitaciones`);
  }

  getHab(id: String): Observable<any> {
    return this.http.get(`${this.API_URI}/habitaciones/${id}`);
  }

  deleteHab(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/habitaciones/${id}`);
  }

  saveHab(hab: Hab): Observable<any> {
    return this.http.post(`${this.API_URI}/habitaciones`, hab);
  }

  updateHab(id: string|number, updatedHab: Hab): Observable<any> {
    return this.http.put(`${this.API_URI}/habitaciones/${id}`, updatedHab);
  }

}

