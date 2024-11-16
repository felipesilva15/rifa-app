import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    profileMenuItems?: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

    ngOnInit() {
        this.profileMenuItems = [
            {
                label: 'Logout', 
                icon: 'pi pi-fw pi-sign-out',
                command: (event) => {
                    this.confirmLogout(event)
                }
            }
        ];
    }

    confirmLogout(event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Deseja mesmo realizar o logout?',
            header: 'Logout',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            rejectIcon: 'none',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            rejectButtonStyleClass:'p-button-text',
            accept: () => {
                this.layoutService.logout();
            }
        });
    }
}
