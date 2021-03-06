import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TitleService } from 'src/app/services/title.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from './../../../environments/environment';
import { filter } from 'rxjs/operators';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginError = '';
    loading = false;
    submitted = false;

    //the route where the app will go after the login button 
    //it's pressed
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private titleService: TitleService,
    ) {
        // redirect to quiz route if user already logged in
        // user is logged in if there is an user object saved in the authentication service
        if (Object.keys(this.authenticationService.currentUserValue).length) {
            this.router.navigate(['/quiz']);
        }

        this.alertService.getAlert()
            .pipe(filter(value => value !== undefined))
            .subscribe(data => {
               this.loginError = data.text;
            });
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get route from the reffered page or default to '/quiz'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/quiz';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.role === 'admin')
                        this.router.navigate(['/dashboard']);
                    else
                        this.router.navigate([this.returnUrl]);
                },
                error => {
                    //console.log(error);
                    
                    this.alertService.error(error.status);
                    this.loading = false;

                });
    }

    get title() {
        return this.titleService.getValue();
    }

    
}

