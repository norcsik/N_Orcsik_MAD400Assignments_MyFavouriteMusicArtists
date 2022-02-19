import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit{

  //Get Inputs on elements
  @Input() decoration?: string;

  @Input() weight?: string;

  @Input() border?: string;

  //Constructor for element w/ selector
  constructor(private elm: ElementRef) { 
  }

  //Mouse enter listener
  @HostListener('mouseenter') onMouseHover(){
    this.mouseHover(this.decoration, this.weight, this.border);
  }

  //Mouse exit listener
  @HostListener('mouseleave') onMouseLeave(){
    this.mouseHover('none', 'normal', 'solid');
  }

  //Event function
  private mouseHover(textStyle: any, fontWeight: any, borderStyle: any){

    //Set new decoration on types
    if(this.elm.nativeElement.className == "type")
    this.elm.nativeElement.style.textDecoration = textStyle;
    
    //Set new weight on tags
    if(this.elm.nativeElement.className == "tags"){
      this.elm.nativeElement.style.fontWeight = fontWeight;
    }

    //Get classes as array from the element
    var classes: string[] = this.elm.nativeElement.className.split(" ");

    //Set new border style on all is-first cards
    for(let className of classes){
      if(className == "is-first"){
        this.elm.nativeElement.style.borderStyle = borderStyle || 'solid';
      }
    }

  }

  ngOnInit(): void {
  }

}
