import { Router } from '@angular/router';

import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input()
  usuario: Usuario = new Usuario();
  constructor(private router: Router) {}

  ngOnInit() {
    this.usuario.role = localStorage.getItem('role');
    if (this.usuario.role) {
      this.router.navigate(['']);
    }
  }

  sair() {
    localStorage.clear();
    location.reload();
  }
}
