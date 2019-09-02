import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageMobService } from 'src/app/services/storage-mob.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   user  = { test: {
     name:'',
     duration:''
   }};
  agree: boolean ;
  constructor(private router: Router,
              private storage: StorageMobService) { }

  ngOnInit() {
    
    //this.user = JSON.parse(this.storage.getData('user'));
  }


  navigateToTest() {
    this.router.navigate(['/test']);
    return;
    if(this.agree){
      this.router.navigate(['/test']);
    } else {
      alert('Please agree term and conditions');
    }
  }
}
