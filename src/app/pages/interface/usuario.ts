export interface Usuario {
  usuario:string;
  password:string;
}

export const USUARIOS:Usuario[] = [
  //LOS USUARIOS DEBEN TENER SUS PASSWORDS CIFRADAS
  {usuario:'Marco', password:'64b782abe4dba6732a79424b55b7bf9db28f57c91bc7f92c2a122f5de78700e8'},
  {usuario:'Lucho', password:'3e559c130abcebd50c471c13b771304a8870246834c9d3345bdc30846e374df6'},
];
