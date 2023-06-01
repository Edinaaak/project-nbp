import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtPaintingService {

  url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  createArtPtg (art : any)
  {
    return this.http.post<any>(`${this.url}/Masterpiece`, art);
  }

  getArtPtg ()
  {
    return this.http.get<any>(`${this.url}/Masterpiece`);
  }

  getArtPtgById(id:number)
  {
    return this.http.get<any>(`${this.url}/Masterpiece/${id}`)
  }

  addMark(addMarkRequest : any)
  {
    return this.http.post<any>(`${this.url}/Masterpiece/add-mark`, addMarkRequest);
  }

  getArtPtgByFilter(param : any)
  {
    const params =
    {
      celinaId: param.celinaId,
      salaId : param.salaId
    }

    return this.http.get(`${this.url}/Masterpiece`, {params});
  }
}
