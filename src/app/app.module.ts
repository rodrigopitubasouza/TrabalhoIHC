import { TabsComponent } from './components/tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';
import { NgEscondePorPermissao } from './directives/ng-esconde-por-permissão.directive';



@NgModule({
  declarations: [AppComponent,HeaderComponent,HeaderBackComponent,TabsComponent,NgEscondePorPermissao],
  entryComponents: [HeaderComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    HeaderBackComponent,
    NgEscondePorPermissao
  ]
})
export class AppModule { }
