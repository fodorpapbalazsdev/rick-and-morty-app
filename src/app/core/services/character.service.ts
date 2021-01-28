import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character.model';
import {ApiResponse} from '../models/api-response-model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private REST_API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  async getCharactersByNameAndStatus(name: string, status: string): Promise<Character[]> {
    const url = this.REST_API_URL + '/character?name=' + name + '&status=' + status;
    return this.getCharactersIterative(url);
  }
  
  async getAllCharacters(): Promise<Character[]> {
    return this.getCharactersIterative(this.REST_API_URL + '/character');
  }

  async getCharacterById(id: number): Promise<Character> {
    return await this.http.get<Character>(this.REST_API_URL + '/character/' + id).toPromise();
  }

  async getCharactersIterative(url: string): Promise<Character[]> {
    const characters = new Array<Character>();
    let res = await this.get(url);
    for (let i = 1; i <= res.info.pages; i++) {
      const correctUrl = url.includes('?') ? url + '&page=' + i : url + '?page=' + i;
      res = await this.get(correctUrl);
      res.results.forEach((c: Character) => {
        characters.push(c);
      });
    }
    return new Promise((resolve, reject) => {
      resolve(characters);
    });
  }

  async get(url: string): Promise<ApiResponse> {
    return await this.http.get<ApiResponse>(url).toPromise();
  }
}
