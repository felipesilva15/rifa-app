import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './main/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from './main/guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    // Main
                    { path: 'raffle', loadChildren: () => import('./main/components/raffle/raffle.module').then(m => m.RaffleModule) },
                    { path: 'participant', loadChildren: () => import('./main/components/participant/participant.module').then(m => m.ParticipantModule) },
                    { path: 'ticket', loadChildren: () => import('./main/components/ticket/ticket.module').then(m => m.TicketModule) },
                ],
                canActivate: [authGuard]
            },

            // Main
            { path: 'auth', loadChildren: () => import('./main/components/auth/auth.module').then(m => m.AuthModule) },

            // Generic
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
