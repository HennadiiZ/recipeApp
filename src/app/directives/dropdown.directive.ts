import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";


@Directive({ selector: '[appDropDown]'})

export class DropDownDirective implements OnInit {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click', ) toggleOpen(){
        this.isOpen = !this.isOpen;
    }
    constructor(){}

    ngOnInit(){}



}