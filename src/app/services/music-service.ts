import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://craze.se/api/v2/tracks.php?cat=19';

export interface ITrack {
  id: number;
  name: string; // Example: "A Beautiful Miracle - 2 Min"
  filename: string; // Example: "A_Beautiful_Miracle__2_Min.mp3"
  composer_id: number; // / Example: 0, 1 or 2
  length: string; // Example: "01:25"

  bpm: number;
  genre: string; // currently not used
  description: string;
  keywords: string;
  primary_category_id: number;
  related_categories: string; // Comma-separated list of categori IDs, e.g. "3,5,6"
  mainTrack: string; // 'Y' for yes.
  price_a: number; // Private license fee
  price_b: number; // Commercial license fee

  product_id: number; // Readonly
  published: string; // Readonly
  minutes: number; // Readonly
  seconds: number; // Readonly
  totalSeconds: number; // Readonly
}

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  constructor(private http: HttpClient) {}

  getTracks(): Observable<ITrack[]> {
    return this.http.get<ITrack[]>(API_URL);
  }
}
