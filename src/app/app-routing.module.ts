import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from "./work/work.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
