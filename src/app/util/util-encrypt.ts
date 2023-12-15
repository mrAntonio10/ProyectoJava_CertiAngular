import {SHA256} from 'crypto-js'
// @ts-ignore
export const encrypt = (data:string): string =>{  //funcion para encriptar
  // Utiliza SHA256
  const encrypted = SHA256(data).toString();

  return encrypted;
};

// // @ts-ignore
// export const decrypt = <T>(value:string):T | null => {
// const valueDecrypt = CryptoJS.AES.decrypt(value, environment.keyEcrypt).toString(CryptoJS.enc.Utf8)
//   if(!valueDecrypt){
//     return null;
//   }
//   return JSON.parse(valueDecrypt) as T;
// }
