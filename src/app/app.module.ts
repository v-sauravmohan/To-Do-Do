import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AddformComponent } from './addform/addform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { GetdataService } from './services/getdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChecklistComponent,
    AddformComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ModalService, GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
