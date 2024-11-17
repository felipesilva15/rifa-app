import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Cadatros',
                items: [
                    { label: 'Rifas', icon: 'pi pi-fw pi-megaphone', routerLink: ['/raffle'] },
                    { label: 'Participantes', icon: 'pi pi-fw pi-user', routerLink: ['/participant'] },
                    { label: 'Bilhetes', icon: 'pi pi-fw pi-ticket', routerLink: ['/ticket'] }
                ]
            },
        ];
    }
}
