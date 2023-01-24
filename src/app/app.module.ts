import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PokemonDetailsComponent} from './pokemons/pokemon-details/pokemon-details.component';
import {ActivityLogComponent} from './activity-log/activity-log.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginGuard} from "./login-guard.service";
import {InsertCommonHeadersInterceptor} from "./insert-common-headers.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AppRoutingModule} from "./app-routing.module";
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {PokemonNiceFormatPipe} from './pipes/pokemon-nice-format.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonBackgroundColorDirective } from './pokemon-background-color.directive';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import { PokeBallComponent } from './pokemons/poke-ball/poke-ball.component';

const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: InsertCommonHeadersInterceptor, multi: true}
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailsComponent,
    ActivityLogComponent,
    LoginComponent,
    NotFoundComponent,
    NavigationComponent,
    PokemonNiceFormatPipe,
    DashboardComponent,
    PokemonBackgroundColorDirective,
    PokemonBackgroundColorDirective,
    PokeBallComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    // Material modules
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,

    // Business modules
    // UsersModule changed to lazy loading
  ],
  providers: [
    LoginGuard,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
