import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(usuario: string, password: string): boolean {
    if (usuario === "Veliz" && password === "12345") {
      sessionStorage.setItem("usuario", usuario);
      sessionStorage.setItem("isLogged", "true");
      return true;
    }
    return false;
  }

  exit():void{
    sessionStorage.clear()
  }

  logUser(): boolean {
    return sessionStorage.getItem("isLogged") === "true";
  }
}