import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedIndex: number;
  constructor() { 
  }

  ngOnInit() {
  }
  
  onTipe(value: string){
    switch(value){
      case 'projects':
         this.selectedIndex = 1; 
      break;
      case 'contact':
        this.selectedIndex = 2;
      break;
      case 'about':
        this.selectedIndex = 3;
      break;
      default:
      break;
    }
  }

  offTipe(){
    this.selectedIndex = 0;
  }
  
}
