import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css'],
})
export class NgIfNgForComponent implements OnInit {
  numero: number = 1;

  constructor() {}

  obtemNumero(event: any) {
    this.numero = event.target.value;
  }

  ngOnInit(): void {}
}
