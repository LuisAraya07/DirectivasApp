import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;
  private _color   :  string   = 'red';
  private _mensaje :  string  = 'Este campo es requerido';

  @Input() set color( valor: string ){
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje( mensaje: string ){
    this._mensaje = mensaje;
    this.setMensaje();
  }
  @Input() set valido( valor: boolean ){
    valor ? this.htmlElement.nativeElement.classList.add('hidden')
          : this.htmlElement.nativeElement.classList.remove('hidden');
  }


  constructor( private _el: ElementRef<HTMLElement> ) {
    this.htmlElement = _el;
   }

  ngOnChanges(changes: SimpleChanges): void {
   // this.mensaje = changes.mensaje.currentValue;
    //this.setMensaje();
    
    
  }

   ngOnInit(){
    this.setColor();
    this.setMensaje();
    this.setClase();
     
   }

   setClase(): void {
     this.htmlElement.nativeElement.classList.add('form-text');
   }

    setColor(): void {
      this.htmlElement.nativeElement.style.color = this._color;
    }
    
    setMensaje(): void{
      this.htmlElement.nativeElement.innerText = this._mensaje;
    }

}
