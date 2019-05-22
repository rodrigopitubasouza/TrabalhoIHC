import { QuadraService } from './../../services/quadra.service';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor( private activatedoute: ActivatedRoute, private quadraService: QuadraService) { }

  ngOnInit() {
    let id = this.activatedoute.snapshot.paramMap.get('id');
    this.quadraService.getQuadras(id).subscribe(result => {
      this.information = result;
    })
  }

  openWebsite(){
    window.open(this.information.Website, '_blank ')
  }

}
