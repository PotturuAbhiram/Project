import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { ProdComponent} from './prod/prod.component'; 
import { SynonymsComponent} from './synonyms/synonyms.component';

const routes: Routes = [
  {path:"prod",component:ProdComponent},
  {path:"home",component:HomeComponent},
  {path:"synonyms",component:SynonymsComponent},
  {path:'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
