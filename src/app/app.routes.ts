import {Routes, RouteModule} from '@angular/router';
import {HomeComponent} from './pages/home.component';
import {HistoryComponent} from './pages/history.component';
import {EquipmentComponent} from './pages/equipment.component';
import {ContactComponent} from './pages/contact.component';
import {ModuleWidthProviders} from '@angular/core';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'equipment', component: EquipmentComponent},
    {path: 'contact', component: ContactComponent}
];

export const routes:ModuleWidthProviders = RouterModule.forRoot(appRoutes);