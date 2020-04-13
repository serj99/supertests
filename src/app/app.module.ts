import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { DatamaniputationService } from './services/datamaniputation.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { TeslistService } from './teslist.service';
import { FooterComponent } from './footer/footer.component';
import { ChangeColorDirective } from './change-color.directive';
import { SecondLetterCapitalPipe } from './second-letter-capital.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPopupModalComponent } from "./common/custom-popup-modal/custom-popup-modal.component";

import { QuizTypeComponent } from './layout/quiz-type/quiz-type.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { TestComponent } from './layout/test/test.component';
import { ScoreComponent } from './layout/score/score.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { ReviewComponent } from './layout/review/review.component';
import { RegisterComponent } from './layout/register/register.component';
import { LoginComponent } from './layout/login/login.component';
import { UserPanelContentComponent } from './layout/user-panel-content/user-panel-content.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    TestComponent,
    ScoreComponent,
    AutoGeneratedComponent,
    FooterComponent,
    QuizTypeComponent,
    ChangeColorDirective,
    SecondLetterCapitalPipe,
    CustomPopupModalComponent,
    FeedbackComponent,
    ReviewComponent,
    RegisterComponent,
    LoginComponent,
    UserPanelContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomPopupModalComponent]
})
export class AppModule { }
