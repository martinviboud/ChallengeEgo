

import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './components/autos/autos.component';
import { FichaTecnicaComponent } from './components/ficha-tecnica/ficha-tecnica.component';
import { SoloAutosComponent } from './components/autos/solo-autos/solo-autos.component';
import { TodosComponent } from './components/autos/todos/todos.component';
import { PickupsComponent } from './components/autos/pickups/pickups.component';
import { SUVComponent } from './components/autos/suv/suv.component';


const ROUTES: Routes = [
    { path: 'autos', component: AutosComponent, children: [
        { path: 'todos', component: TodosComponent},
        { path: 'soloAutos', component: SoloAutosComponent},
        { path: 'pickups', component: PickupsComponent},
        { path: 'suv', component: SUVComponent},
        { path: '**', pathMatch: 'full', redirectTo: 'todos' }
    ]},
    { path: 'ficha/:id', component: FichaTecnicaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'autos' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
