import { QuadraReservada } from './../../models/QuadraReservada';
import { isNullOrUndefined } from 'util/util';
import { QuadraService } from './../../services/quadra.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { QuadraReservadaService } from 'src/app/services/quadra-reservada.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  diaCurto = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  diaCompleto = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  mesCurto = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  mesCompleto = ['janeiro', 'fevereiro', 'março'
  , 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  information =  null;
  quadraReserva: QuadraReservada = new QuadraReservada();
  constructor( private activatedoute: ActivatedRoute, private quadraService: QuadraService,
    private quadraReservadaService: QuadraReservadaService,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    let id = this.activatedoute.snapshot.paramMap.get('id');
    this.quadraService.getQuadras(id).subscribe(result => {
      this.information = result;
    })
  }

  openWebsite() {
    window.open(this.information.Website, '_blank ');
  }

  getData(event) {
    this.quadraReserva.data = event.detail.value.substring(0, 10);
  }

  getHorario(event) {
    this.quadraReserva.horario = event.detail.value.substring(11, 16);
  }

  reservar() {
    if (isNullOrUndefined(this.quadraReserva.data)) {
      this.presentMensagemToast('Por favor selecione uma data');
      return;
    }
    if (isNullOrUndefined(this.quadraReserva.horario)) {
      this.presentMensagemToast('Por favor selecione um horário');
      return;
    }
    this.quadraReserva.qualElemento = '' + this.information[0].id;

    this.quadraReservadaService.verificaQuadras(this.quadraReserva).subscribe(result => {
      console.log(result[0]);
      console.log(result);
      if (!isNullOrUndefined(result[0])) {
        this.presentMensagemToast('A quadra já está reservada');
      } else {
        this.quadraReservadaService.insereReservaQuadra(this.quadraReserva).subscribe(() => {
        this.acceptMensagemToast('Cadastro Realizado com sucesso');
        this.router.navigate(['/movies']);
        });
      }
    });
  }

  async presentMensagemToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
  }

  async acceptMensagemToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'success',
      position: 'middle'
    });
    toast.present();
  }
}
