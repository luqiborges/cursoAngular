import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  images: Images[] = [];
  erro: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getFotos();
  }

  getFotos(): void {
    this.crudService.getFotos().subscribe((response: any) => {
      this.images = response;
      console.log(this.images);
      console.log('olá, aqui o response', response);
      console.log('olá, aqui o images', this.images);
    });
  }
}
