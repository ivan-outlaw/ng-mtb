import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {HistoryComponent} from './pages/history/history.component';
import {EquipmentComponent} from './pages/equipment/equipment.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'equipment', component: EquipmentComponent},
    {path: 'contact', component: ContactComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);