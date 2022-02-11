import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor( 
    private elementRef: ElementRef,
    private renderer: Renderer2 // Renderer2 is a better aproach 
  ){}

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', );
  }

  @HostListener('mouseover', ['$event'] ) mouseOver(event: any): void {
    // console.log(event);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen', );
 }

 @HostListener('mouseleave', ['$event'] ) mouseLeave(event: any): void {
   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white', );
 }


}
