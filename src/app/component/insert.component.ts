import {Component} from '@angular/core';

@Component({
    selector: 'insert-component',
    templateUrl: '../views/insert.component.html'
})

export class insertComponent {
    public titulo: string;

    constructor(){
        this.titulo='Insert Component';
    }

    ngOnInit(){
        console.log("Se ha cargado el " + this.titulo);
    }
}