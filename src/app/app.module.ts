import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SubtractingComponent } from './subtracting/subtracting.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SubtractingComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {path: 'subtracting', component: SubtractingComponent},
      {path: 'test', component: TestComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
