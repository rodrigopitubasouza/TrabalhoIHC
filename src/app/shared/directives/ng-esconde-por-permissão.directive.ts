import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ngEscondePorPermissao]'
})
export class NgEscondePorPermissao implements OnInit {

  @Input('ngEscondePorPermissao')
  requiredRole: string[];


  private isVisible = false;
  private userRole = localStorage.getItem('role');

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    if (!this.userRole) {
      this.viewContainerRef.clear();
    }

    if (this.userRole) {

      this.requiredRole.forEach(element => {
        if (this.userRole === element) {
          if (!this.isVisible) {
            this.isVisible = true;
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          } else {
            this.isVisible = false;
            this.viewContainerRef.clear();
          }
        }
      });
    }
  }
}
