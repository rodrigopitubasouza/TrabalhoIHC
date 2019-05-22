import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(
        private router: Router,
        public alertController: AlertController
    ) { }

    async canActivate(
    ) {
         if (localStorage.getItem("valido") === "true") {
           return true;
          } else {
           await this.presentAlert();
          }
    }

    canLoad() {
        if (localStorage.getItem("valido") === "true") {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }

    async presentAlert() {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Não possui permissão',
          message: 'Você não possui acesso a esta página',
          buttons: ['OK']
        });
    
        await alert.present();
      }
}