import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private elem: ElementRef) {}
  
  @HostListener('mouseover') onMouseOver(){

    this.elem.nativeElement.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  }

  @HostListener('mouseout') onMouseOut(){

    this.elem.nativeElement.style.boxShadow = "None";
  }


}
