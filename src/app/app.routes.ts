import { Routes } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { ProjectsComponent } from './sites/projects/projects.component';
import { CvComponent } from './sites/cv/cv.component';

export const routes: Routes = [
    { path: 'projects/:projectType', component: ProjectsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'career', component: CvComponent },
    { path: '', redirectTo: "home", pathMatch: "full" },
];
