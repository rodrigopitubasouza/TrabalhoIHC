import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
    selector: 'tabs-component',
    templateUrl: 'tabs.component.html'
})
export class TabsComponent implements OnInit{
    @Input()
    usuario: Usuario;
    constructor() {

    }

    ngOnInit() {
        this.usuario.role = localStorage.getItem('role');
    }

    sair() {
        localStorage.clear();
    }
}
