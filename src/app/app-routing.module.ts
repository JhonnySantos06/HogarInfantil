import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { DataServiceComponent } from './Component/data-service/data-service.component';
import { LoginComponent} from './Component/login/login.component';
import { UsuarioNuevoComponent } from './Component/usuario-nuevo/usuario-nuevo.component';
import { MenuComponent } from './Component/menu/menu.component';

const routes: Routes = [

  {path: 'login',
  component: LoginComponent
}, 
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'data',
    component:DataServiceComponent
  }, 
  {
    path: 'nuevo',
    component:UsuarioNuevoComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '**',
    pathMatch:'full',redirectTo:'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
