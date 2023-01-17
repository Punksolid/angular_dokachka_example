import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {PokemonsComponent} from "./pokemons/pokemons.component";
import {LoginGuard} from "./login-guard.service";
import {PokemonDetailsComponent} from "./pokemons/pokemon-details/pokemon-details.component";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ListComponent} from "./users/list/list.component";

const routes: Routes = [
  { path: 'users', component: ListComponent },
  { path: 'pokemons', component: PokemonsComponent, canActivate: [LoginGuard] },
  { path: 'pokemons/:id', component: PokemonDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ], exports: [ RouterModule ]
}) export class AppRoutingModule {}
