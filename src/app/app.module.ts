import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'bootstrap';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, 
  MatFormFieldModule, 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule,
  MatDialogModule, 
  MatSnackBarModule
} from '@angular/material';
import { appRoutes } from './routes';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import {Web3Service} from './util/web3.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { VotedialogComponent } from './components/list/votedialog/votedialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    VotedialogComponent,
  ],
  entryComponents: [VotedialogComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDialogModule,
    MatDividerModule, 
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthGuard, Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
