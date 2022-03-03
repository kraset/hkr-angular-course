import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonTableComponent } from './components/home/person-table/person-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPersonDialogComponent } from './components/home/edit-person-dialog/edit-person-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonTableComponent,
    EditPersonDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // for ngModel
    HttpClientModule,
    MatDialogModule, // for dialogs
    MatButtonModule, // for buttons
    MatFormFieldModule, // for inputs
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
