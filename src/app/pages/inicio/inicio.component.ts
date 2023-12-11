import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];

  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  constructor() {
    const aCollection = collection(this.firestore, 'goty');
    this.items$ = collectionData(aCollection);
    this.items$
      .pipe(
        map((resp: Game[]) =>
          resp.map(({ name, votos }) => ({ name, value: votos }))
        )
      )
      .subscribe((juegos) => (this.juegos = juegos));
  }

  ngOnInit(): void {}
}
