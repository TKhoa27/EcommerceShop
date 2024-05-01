import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component'
import { AboutPageComponent } from '../app/pages/about-page/about-page.component'
import { ContactPageComponent } from '../app/pages/contact-page/contact-page.component'
import { SigninPageComponent } from '../app/pages/signin-page/signin-page.component'

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
