import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  constructor() {}
  ngOnDestroy(): void {}
  @Input() results: any[] = [];
  // result: any[] = [
  //   {
  //     name: 'juego 1',
  //     value: 20,
  //   },
  //   {
  //     name: 'juego 2',
  //     value: 25,
  //   },
  //   {
  //     name: 'juego 3',
  //     value: 15,
  //   },
  //   {
  //     name: 'juego 4',
  //     value: 30,
  //   },
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  onSelect(event: any) {
    console.log(event);
  }
}
