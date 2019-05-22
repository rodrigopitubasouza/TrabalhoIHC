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
  constructor( private activatedoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id = this.activatedoute.snapshot.paramMap.get('id');
    this.movieService.searchDetails(id).subscribe(result=>{
      console.log('details', result);
      this.information = result;
      
    })
  }

  openWebsite(){
    window.open(this.information.Website, '_blank ')
  }

}
