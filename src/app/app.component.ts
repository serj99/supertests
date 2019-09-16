import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ipriksha';
  counter : number;
  loading:boolean;
  progress:boolean;
  childDataRecieved(data:number):void{
    this.counter = data;
  }

  constructor(router:Router,
              private loaderService: LoaderService){
    this.loading = false;
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    );

    this.loaderService.statusBSObser.subscribe(res=>{
      this.progress = res;
    })

  }


}
