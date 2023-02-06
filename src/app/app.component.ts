import {Component, OnInit} from '@angular/core';
import {Greeter} from "./classes/greeter";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user!:Greeter

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.user=this.userService.getUser()
  }

}


