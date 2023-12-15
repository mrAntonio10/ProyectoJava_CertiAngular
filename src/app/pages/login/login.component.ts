import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Usuario, USUARIOS} from "../interface/usuario";
import {encrypt} from "../../util/util-encrypt";

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


  onSubmit(usuarioRequest: string, passwordRequest: string){
 // @ts-ignore
    let usuarioOpt = this.validationUsersList.filter(
      item => item.usuario == usuarioRequest);

    // @ts-ignore
    if(usuarioOpt.length>0 && (usuarioOpt.at(0).password) === encrypt(passwordRequest)) {  //aseguramos de que existan datos para poder buscar supassword
      this.router.navigate(['/goty']);
    } else {
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
  }
}
