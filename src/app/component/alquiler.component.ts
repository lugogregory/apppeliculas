import {Component} from '@angular/core';

@Component({
    selector: 'alquiler-component',
    templateUrl: '../views/alquiler.component.html'
})

export class alquilerComponent{
    public titulo: string;

    constructor(){
        this.titulo="Alquiler Component";
    }

    ngOnInit(){
        console.log("Se ha cargado el " + this.titulo);
    }
}