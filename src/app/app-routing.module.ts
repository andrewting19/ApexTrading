import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { PerformanceComponent } from './performance/performance.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'membership', component: MembershipComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
