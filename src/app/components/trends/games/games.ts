import { Component, inject } from '@angular/core';
import { Sgames } from '../../../services/sgames';
import { Igames } from '../../../interfaces/igames';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {
  private readonly sGames = inject(Sgames);
  gamesItems:Igames[] = [];


  ngOnInit(): void {
    this.getGames();
  }

  getGames():void{
    this.sGames.getGamesData().subscribe({
      next:(res)=>{
          this.gamesItems = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  
}
