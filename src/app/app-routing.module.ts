import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PokemonsComponent} from "./pokemons/pokemons.component";
import {LoginGuard} from "./login-guard.service";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UserNewComponent} from "./users/user-new/user-new.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserRegisterComponent} from "./user-register/user-register.component";

const routes: Routes = [
  { path: 'register', component: UserRegisterComponent},
  { path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  { path: 'users/new', component: UserNewComponent },
  { path: 'users/:id/edit', component: UserEditComponent },
  { path: 'pokemons', component: PokemonsComponent, canActivate: [LoginGuard] },
  // { path: 'pokemons/:id', component: PokemonDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ], exports: [ RouterModule ]
}) export class AppRoutingModule {}
