import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path:"main",
    component:MainLayoutComponent,
    children:[
        {
            path:"home",
            component:HomeComponent
        }
    ]
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'signup',
    component:RegisterComponent
},
{
    path:'',
    redirectTo:'main/home',
    pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
