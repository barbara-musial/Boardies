import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavBarButtonComponent } from './nav-bar-button/nav-bar-button.component';
import { NavBarLogoComponent } from './nav-bar-logo/nav-bar-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    NavigationBarComponent,
    NavBarButtonComponent,
    NavBarLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
