export interface Usuario {
  usuario:string;
  password:string;
}

export const USUARIOS:Usuario[] = [
  //LOS USUARIOS DEBEN TENER SUS PASSWORDS CIFRADAS
  {usuario:'Marco', password:'U2FsdGVkX1/gVRKaRGH1bsIz6Tj8twjVpWNMOei6F3w='},
  {usuario:'Lucho', password:'U2FsdGVkX1+wne9OrcYrtPI70US8beJtaIN30CfSDh8='},
];
