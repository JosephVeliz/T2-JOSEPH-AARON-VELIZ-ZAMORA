import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(usuario: string, password: string): boolean {
    if (usuario === "Veliz" && password === "12345") {
      sessionStorage.setItem("usuario", usuario);
      return true;
    }
    return false;
  }

  exit():void{
    sessionStorage.clear()
  }

  ussGuardado(): boolean {
    return sessionStorage.getItem("usuario") !== null;
  }
}