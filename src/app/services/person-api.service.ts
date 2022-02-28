import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPerson } from '../model/person';

const PERSONS_FROM_BACKEND: IPerson[] = [
  // Add our persons here...
];

@Injectable({
  providedIn: 'root',
})
export class PersonApiService {
  constructor() {}

  getAllPersons(): Observable<IPerson[]> {
    return of([]);
  }
}
