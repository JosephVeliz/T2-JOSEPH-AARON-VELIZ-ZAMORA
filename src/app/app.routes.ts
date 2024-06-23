import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pregunta02Component } from './dashboard/pregunta02/pregunta02.component';
import { Pregunta03Component } from './dashboard/pregunta03/pregunta03.component';
import { Pregunta04Component } from './dashboard/pregunta04/pregunta04.component';
import { HomeComponent } from './dashboard/home/home.component';
import { authGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
{path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {path: "home", component: HomeComponent},
            {path: "pregunta02", component: Pregunta02Component},
            {path: "pregunta03", component: Pregunta03Component},
            {path: "pregunta04", component: Pregunta04Component},
            
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];