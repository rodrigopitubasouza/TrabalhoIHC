import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
    selector: 'tabs-component',
    templateUrl: 'tabs.component.html'
})
export class TabsComponent implements OnInit{
    @Input()
    usuario: Usuario = new Usuario();
    constructor(private router: Router) {

    }

    ngOnInit() {
        this.usuario.role = localStorage.getItem('role');
        if(this.usuario.role) {
            this.router.navigate(['']);
        }
    }

    
    sair() {
        localStorage.clear();
        location.reload();
    }
}
