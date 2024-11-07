import { Routes } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { ProjectsComponent } from './sites/projects/projects.component';

export const routes: Routes = [
    { path: 'projects/:projectType', component: ProjectsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: "home", pathMatch: "full" },
];
