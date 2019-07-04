import {Component} from '@angular/core';

@Component ({
    selector: 'home-component',
    templateUrl: '../views/home.component.html'
})

export class homeComponent {
    public titulo: string;

    constructor(){
        this.titulo="Home-Component";
    }

    ngOnInit(){
        console.log("Se está ejecutando el " + this.titulo);
    }
};