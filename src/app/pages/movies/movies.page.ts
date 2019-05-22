import { QuadraService } from './../../services/quadra.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from './../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;

  constructor(private quadraService: QuadraService) { }

  ngOnInit() {
    this.results = this.quadraService.getAllQuadras();
  }

  searchChanged() {
    this.results = this.quadraService.getAllQuadras();
  }

}
