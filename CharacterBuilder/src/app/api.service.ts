import {firstValueFrom, map} from 'rxjs';
import {ImageData} from './build/build.component';
import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  async createImage(imageData: ImageData) {
    return await firstValueFrom(this.httpClient.post('http://localhost:5110/build-image-url', imageData));
  }

  getRandomImage() : ImageData  {
    const res : any = this.httpClient.get('http://localhost:5110/get-random-image-options');
    return res as ImageData;
  }
}
