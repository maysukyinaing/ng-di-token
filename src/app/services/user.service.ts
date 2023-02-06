import {Inject, Injectable} from '@angular/core';
import {User} from "../interfaces/user";
import {Greeter, GREETER} from "../classes/greeter";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=[
    {
      firstName:'John',
      lastName:'William'
    },
    {
      firstName:'Pyae',
      lastName:'Thiri'
    },
    {
      firstName:'Hein',
      lastName:'Htet'
    },
    {
      firstName:'Kyi',
      lastName:'Naing'
    }
  ]
  constructor(@Inject(GREETER)public greeter:typeof Greeter) { }

  getUser() {
    const user = this.users[Math.floor(Math.random() * this.users.length)]
    return new this.greeter(user)
  }
}
