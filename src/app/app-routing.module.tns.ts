import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { TestComponent } from './layout/test/test.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full',
  },
  {
      path: 'auto-generated',
      component: AutoGeneratedComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
