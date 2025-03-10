import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'projects', component: ProjectsComponent },
            { path: 'messages', component: ProjectsComponent },
            { path: 'timereport', component: ProjectsComponent },
            { path: 'timeline', component: ProjectsComponent },
            { path: 'hirearchy', component: ProjectsComponent },
            { path: 'settings', component: ProjectsComponent },
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }


