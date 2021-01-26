import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private REST_API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  async getCharacters(): Promise<Character[]> {
    const result = await this.http.get<any>(this.REST_API_URL + '/character').toPromise();
    return new Promise((resolve, reject) => {
      resolve(result.results);
    });
  }

  async getCharacterById(id: number): Promise<Character> {
    const result = await this.http.get<any>(this.REST_API_URL + '/character/' + id).toPromise();
    return new Promise((resolve, reject) => {
      resolve(result);
    });
  }
}
