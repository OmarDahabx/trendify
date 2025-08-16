import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-trends',
  imports: [RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './trends.html',
  styleUrl: './trends.css'
})
export class Trends {

}
