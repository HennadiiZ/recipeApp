import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getValue = 'recipe';
  
  onNavigate(str: string){
    console.log(str)
    this.getValue = str 

    // if(this.getValue == 'recipe'){
    //    return true
    // }else{
    //   return false
    // }
    
  }
}
