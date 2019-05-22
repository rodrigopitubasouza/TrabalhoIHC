import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-back-component',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {

  @Input()
  public titulo: string;

  constructor() { }

  ngOnInit() {
  }
}
