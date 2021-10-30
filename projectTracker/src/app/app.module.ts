import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './project/create/create.component';
import { ListComponent } from './project/list/list.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ProjectService } from './project/project.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateComponent,
    ListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDatepickerModule,
  ],
  providers: [ProjectService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
