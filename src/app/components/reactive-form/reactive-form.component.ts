import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
    constructor() {
        console.log();
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
