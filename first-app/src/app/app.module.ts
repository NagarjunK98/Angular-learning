import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruits/fruits.component';
import { AppRouterModule } from './app-routing.module';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@NgModule({
  declarations: [AppComponent, FruitComponent, FruitListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
