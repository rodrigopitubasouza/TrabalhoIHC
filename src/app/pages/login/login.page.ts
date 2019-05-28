import { BaseFormComponent } from './base-form.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { isNullOrUndefined } from 'util/util';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage extends BaseFormComponent implements OnInit {
  usuario: Usuario = new Usuario;
  constructor(private usuarioService: UsuarioService,
              public toastController: ToastController,
              private formBuilder: FormBuilder,
              private router: Router) {
    super();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

 logar() {
   this.usuario.email = this.registerForm.value.email;
   this.usuario.senha = this.registerForm.value.password;
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

    public onSubmit(): void {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.logar();
    }

}
