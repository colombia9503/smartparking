import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//deprecated
import { AngularFireDatabaseModule as AFDBprecated } from 'angularfire2/database-deprecated';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { BuscarVehiculoComponent } from './buscar-vehiculo/buscar-vehiculo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//services
import { CeldaService } from './services/celda.service';
import { VariableService } from './services/variable.service';
import { AutoService } from './services/auto.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ControlPanelComponent,
    BuscarVehiculoComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AFDBprecated,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFirestoreModule
  ],
  providers: [CeldaService , VariableService, AutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
