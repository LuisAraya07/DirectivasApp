import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion: boolean ){
    if ( condicion ){
      this._viewContainer.createEmbeddedView( this._el );
    }else{
      this._viewContainer.clear();
    }
  }
  constructor( private _el : TemplateRef<HTMLElement>,
                private _viewContainer: ViewContainerRef) { }

}
