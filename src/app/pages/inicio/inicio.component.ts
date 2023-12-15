import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Game, GAMES} from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  copyJuegos: Game[] = GAMES;
  //@ts-ignore
  juegos: { name: string; value: number }[];  //el mapeo manual de datos

  // firestore: Firestore = inject(Firestore);
  // items$: Observable<any[]>;
  constructor() {
    // const aCollection = collection(this.firestore, 'goty');
    // this.items$ = collectionData(aCollection);
    // this.items$
    //   .pipe(
    //     map((resp: Game[]) =>
    //       resp.map(({ name, votos }) => ({ name, value: votos }))
    //     )
    //   )
    //   .subscribe((juegos) => (this.juegos = juegos));

    // Mapeo de juegos a un nuevo formato
    this.juegos = this.copyJuegos.map(({ name, votos }) => ({ name, value: votos }));

  }

  ngOnInit(): void {}
}
