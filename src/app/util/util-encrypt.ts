import * as CryptoJS from 'crypto-js'
import {environment} from "../../environments/environment";
// @ts-ignore
export const encrypt = (data:string): string =>{  //funcion para encriptar
  return CryptoJS.AES.encrypt(data, environment.keyEcrypt).toString();
};

// @ts-ignore
export const decrypt = <T>(value:string):T | null => {
const valueDecrypt = CryptoJS.AES.decrypt(value, environment.keyEcrypt).toString(CryptoJS.enc.Utf8)
  if(!valueDecrypt){
    return null;
  }
  return JSON.parse(valueDecrypt) as T;
}
