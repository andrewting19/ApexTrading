import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShiritoriComponent } from './shiritori/shiritori.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent},
  { path: 'shiritori', component: ShiritoriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
