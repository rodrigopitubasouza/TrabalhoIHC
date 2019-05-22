import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/Usuario';
import { ToastController } from '@ionic/angular';
import { isNullOrUndefined } from 'util/util'
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario = new Usuario;
  constructor(private usuarioService: UsuarioService,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {

  }

 logar() {
        this.usuarioService.confirmaLogin(this.usuario).pipe(take(1)).subscribe( result => {
          if (!isNullOrUndefined(result) && !isNullOrUndefined(result[0])) {
            result.forEach(element => {
                  localStorage.setItem('role', element.role);
                  localStorage.setItem('valido', 'true');
                  localStorage.setItem('id', element.id);
                  location.reload();
              });
            } else {
                this.presentToast();
              }
            });
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'O e-mail ou a senha informada não está correta',
        duration: 2000,
        color: 'danger',
        position: 'middle'
      });
      toast.present();
    }
}
