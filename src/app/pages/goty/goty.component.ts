import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import {Game, GAMES} from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  juegos: Game[] = GAMES;

  constructor(private game: GameService) {}

  ngOnInit(): void {
    // this.game.getNominados().subscribe((juegos) => {
    //   this.juegos = juegos;
    //   console.log(this.juegos);
    // });

    //comentamos por que se creo una interfaz con los juegos
  }

  votaJuego(juego: Game) {
    this.game.votarJuego(juego.id).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire('Gracias', resp.mensaje, 'success');
      } else {
        Swal.fire('Oops', resp.mensaje, 'error');
      }
    });
  }
}
