import { NgEscondePorPermissao } from './directives/ng-esconde-por-permissão.directive';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [HeaderComponent, TabsComponent, NgEscondePorPermissao],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, TabsComponent, NgEscondePorPermissao]
})
export class SharedModule {}
