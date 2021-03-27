import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { CardsComponent } from './cards/cards.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: CardsComponent,
    path: 'cards'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
