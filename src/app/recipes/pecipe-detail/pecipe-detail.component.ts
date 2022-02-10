import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-pecipe-detail',
  templateUrl: './pecipe-detail.component.html',
  styleUrls: ['./pecipe-detail.component.css']
})
export class PecipeDetailComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
