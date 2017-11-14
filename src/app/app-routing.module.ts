import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HomeComponent } from './home/home.component';
import { BuscarVehiculoComponent } from './buscar-vehiculo/buscar-vehiculo.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'controlpanel',
        component: ControlPanelComponent
    },
    {
        path: 'buscarvehiculo',
        component: BuscarVehiculoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }