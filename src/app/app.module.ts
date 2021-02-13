import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';
import { LayoutModule } from '@angular/cdk/layout';
import { ModalService } from './modal/modal.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './safe.pipe';
import { PerformanceComponent } from './performance/performance.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MembershipComponent } from './membership/membership.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    PerformanceComponent,
    TestimonialsComponent,
    MembershipComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule,
    NgbModule,
    LayoutModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
