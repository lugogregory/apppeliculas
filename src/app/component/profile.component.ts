import {Component} from '@angular/core';

@Component({
    selector: 'profile-component',
    templateUrl: '../views/profile.component.html'
})

export class profileComponent{
    public titulo: string;

    constructor(){
        this.titulo="Profile Component";
    }

    ngOnInit(){
        console.log("Se ha cargado el " + this.titulo);
    }
}