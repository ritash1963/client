import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
   this.authService.login(this.model).subscribe(response => {
    this.router.navigateByUrl('/repositories');
       this.loggedIn = true; 
      }, error => {
         console.log(error); 
         this.toastr.error(error.error);
   })  
 }

  logout() {
   this.authService.logout();  
   this.loggedIn = false;
   this.router.navigateByUrl('/');
 }

 getCurrentUser() {
  this.authService.currentUser$.subscribe(user => {
  this.loggedIn = !!user; 
  }, error => {
    console.log(error);
  })
 }

}
