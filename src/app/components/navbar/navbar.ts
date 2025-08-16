import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scroll:boolean = false

  @HostListener('window.scroll') onScrolll(){
    if(scrollY > 0){
      this.scroll = true
    }
    else{
      this.scroll = false
    }
  }
}
