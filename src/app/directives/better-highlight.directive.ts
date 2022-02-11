import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';


  constructor( 
    private elementRef: ElementRef,
    private renderer: Renderer2 // Renderer2 is a better aproach 
  ){}

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', );

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover', ['$event'] ) mouseOver(event: any): void {
    // console.log(event);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen', );
    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }

  @HostListener('mouseleave', ['$event'] ) mouseLeave(event: any): void {
   //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white', );
   this.backgroundColor = this.defaultColor;
   this.color = 'red';
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.color') color: string = 'red';

}
