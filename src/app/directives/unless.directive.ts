import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
        if(!condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else {
            this.viewContainerRef.clear();
        }
  }
  constructor(
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>, // what?
    private viewContainerRef: ViewContainerRef // where? 
  ){}

}
