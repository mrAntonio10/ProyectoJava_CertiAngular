import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private juegos: Game[] = [];

  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos);
    } else {
      return this.http
        .get<Game[]>(
          `https://us-central1-firestore-grafica-2c7d2.cloudfunctions.net/api/goty`
        )
        .pipe(tap((juegos) => (this.juegos = juegos)));
    }
  }

  votarJuego(id: string) {
    return this.http
      .post(
        `https://us-central1-firestore-grafica-2c7d2.cloudfunctions.net/api/goty/${id}`,
        {}
      )
      .pipe(
        catchError((err) => {
          return of(err.error);
        })
      );
  }
}
