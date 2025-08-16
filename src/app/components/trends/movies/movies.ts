import { Component,  inject } from '@angular/core';
import { Moveis } from '../../../services/movies';
import { Imovies } from '../../../interfaces/imovies';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
private readonly moveis = inject(Moveis);
  moveisItems:Imovies[] = [];
  imgSrc:string = "https://image.tmdb.org/t/p/w500";

  ngOnInit(): void {
    this.getMoviesData();
  }

  getMoviesData():void{
    this.moveis.getData().subscribe({
      next: (res) => {
        this.moveisItems = res.results;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
