import { Directive, ElementRef, OnInit } from "@angular/core";



@Directive({selector: '[appBasicHighLight]'})

export class BasicHighLightDirective implements OnInit{

    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'lightgreen'; // it is not a good practice to access elements  directly
    }
}