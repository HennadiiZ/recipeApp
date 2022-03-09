import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../_core/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor( private dataStorageService: DataStorageService){}

  ngOnInit(): void {
  }

  // onSelect(str: string): void{
  //   this.featureSelected.emit(str);
  // }

  onSaveData(){
     this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    
  }

}
