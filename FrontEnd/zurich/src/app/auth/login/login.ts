import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiauth } from '../../services/apiauth';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginObj:LoginModel = new LoginModel()
  router = inject(Router);

  username: string = this.loginObj.usuario;
  password: string = this.loginObj.password;
  mensaje: string = '';
  
  constructor(private authService: Apiauth) {}

  onLogin(){

    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res) => {
          this.mensaje = res;
          console.log('Respuesta:', res);
          this.router.navigateByUrl("");
        },
        error: (err) => {
          this.mensaje = 'Credenciales Incorrectas';
          console.error(err + this.mensaje);
        }
      });
}

}


class LoginModel{
  usuario: string;
  password: string; 

  constructor(){
    this.usuario=''; 
    this.password=''
  }
}