import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective{

  @Input () ngModel: string|undefined;

  constructor(private elem: ElementRef) {
    console.log('constructed InputTextFilterDirective');
    (elem.nativeElement as HTMLInputElement).value = '';
  }

  // ngOnChanges(): void {
  //   let value = this.elem.nativeElement.innerText;
  //   console.log(value);
  //   this.elem.nativeElement.style.backgroundColor = 'yellow';
  //   //"0 4px 8px 0 rgba(150, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    
  // }
  @HostListener('change')
  onChange() {
    console.log('in change InputTextFilterDirective');
    (this.elem.nativeElement as HTMLInputElement).value.trim();
    console.log(this.ngModel);
  }
}

