import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Usuario, USUARIOS} from "../interface/usuario";
import {decrypt, encrypt} from "../../util/util-encrypt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  validationUsersList:Usuario[] = USUARIOS;
  constructor(private router: Router) {
  }


  onSubmit(usuarioRequest: string){
    console.log("Usuario a buscar", usuarioRequest);
    console.log("filtrado", this.validationUsersList.filter(item => item.usuario == usuarioRequest));
    // @ts-ignore
    let usuarioOpt = this.validationUsersList.filter(
      item => item.usuario == usuarioRequest);
    // @ts-ignore
    if(usuarioOpt.length>0 && decrypt(usuarioOpt.at(0).password) === this.password) {  //aseguramos de que existan datos para poder buscar supassword
      this.router.navigate(['/goty']);
    } else {
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
    //Para mostrar en pantalla las passwords encriptadas
    // console.log(encrypt(JSON.stringify('marcoro')))
    // console.log(encrypt(JSON.stringify('luchoro')))

  }
}
