import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServiceComponent } from './Component/data-service/data-service.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Component/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Component/login/login.component';
import { UsuarioNuevoComponent } from './Component/usuario-nuevo/usuario-nuevo.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DataServiceComponent,
    RegisterComponent,
    LoginComponent,
    UsuarioNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
