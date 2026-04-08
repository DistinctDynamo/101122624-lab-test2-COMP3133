import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class Harrypotterapiservice {
  private readonly BASE_URL = "https://hp-api.onrender.com/api/characters"
 
  private readonly httpClient = inject(HttpClient)

  public getCharacters(): Observable<Character[]>{
    return this.httpClient.get<Character[]>(this.BASE_URL)
  }

  public getCharactersByHouse(house:string): Observable<Character[]>{
    return this.httpClient.get<Character[]>(`this.BASE_URL/house/${house}`)
  }
}
