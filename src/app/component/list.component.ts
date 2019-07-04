import {Component} from '@angular/core';

@Component({
    selector: 'list-component',
    templateUrl: '../views/list.component.html'
})

export class listComponent {
    public titulo: string;

    constructor(){
        this.titulo = "List-Component";
    }

    ngOnInit() {
        console.log("se ha cargado el componente " + this.titulo);
    }
}