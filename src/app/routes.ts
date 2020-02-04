import { Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


export const appRoutes: Routes = [

  { 
    path: 'create', component: CreateComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'edit/:id', component: EditComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'list', component: ListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },

  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full'}
  
];
