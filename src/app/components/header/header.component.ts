import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {


  constructor(private authService:AuthService) {}

  //iscollapsed handle responsive mode for the humburger button to be collapsed
  isCollapsed = true;

  ngOnInit(): void {
  }
  //function to do logout from the site and removes the autherization of the user from auth service.
  dologout(){
    this.authService.logout();
  }

}
