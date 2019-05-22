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

  information =  null;
  constructor( private activatedoute: ActivatedRoute, private quadraService: QuadraService) { }

  ngOnInit() {
    let id = this.activatedoute.snapshot.paramMap.get('id');
    this.quadraService.getQuadras(id).subscribe(result => {
      this.information = result;
      console.log(this.information);
    })
  }

  openWebsite(){
    window.open(this.information.Website, '_blank ')
  }

}
