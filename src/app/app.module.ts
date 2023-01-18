import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseTabComponent } from './components/course-tab/course-tab.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { SortComponent } from './components/sort/sort.component';
import { CardDataService } from './services/card-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    LoginContainerComponent,
    NavbarComponent,
    CourseTabComponent,
    FilterComponent,
    CardComponent,
    SortComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [CardDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
