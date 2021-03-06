import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { TestComponent } from './layout/test/test.component';
import { ScoreComponent } from './layout/score/score.component';
import { QuizTypeComponent } from './layout/quiz-type/quiz-type.component';
import { ReviewComponent } from './layout/review/review.component';

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
  { path: 'score',
  component: ScoreComponent},
  {  path: 'quiz',
  component: QuizTypeComponent},
  {  path: 'review',
   component: ReviewComponent}
];



@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
