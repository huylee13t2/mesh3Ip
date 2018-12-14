import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ng2-cookies';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewInvoiceComponent } from './pages/new-invoice/new-invoice.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ExportInvoiceComponent } from './pages/export-invoice/export-invoice.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth-service/auth-service.service';
import { appRoutes } from './app.routes';
import { LangService } from './services/lang/lang.service';
import { EmailVerifyComponent } from './pages/email-verify/email-verify.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { BillingsService } from './services/billings-service/billings.service';
import { PaymentsService } from './services/payments-service/payments.service';
import { LoadingComponent } from './components/loading/loading.component';
import { UserSettingsService } from './services/user-settings-service/user-settings.service';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';

// new page
import { HomeCtnComponent } from "./contents/home/home.component";
import { HeaderCtnComponent } from "./contents/header/header.component";
import { FooterCtnComponent } from "./contents/footer/footer.component";
import { TosComponent } from "./contents/tos/tos.component";
import { DisclaimerComponent } from "./contents/disclaimer/disclaimer.component";
import { PricingComponent } from "./contents/pricing/pricing.component";
import { PrivacyComponent } from "./contents/privacy/privacy.component";
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewInvoiceComponent,
    SettingsComponent,
    ExportInvoiceComponent,
    InformationsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    EmailVerifyComponent,
    ResetPasswordComponent,
    LoadingComponent,
    NumberOnlyDirective,
    // new page
    HeaderCtnComponent,
    FooterCtnComponent,
    HomeCtnComponent,
    TosComponent,
    DisclaimerComponent,
    PricingComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularDateTimePickerModule,
    HttpClientModule
  ],
  providers: [ 
    AuthService,
    LangService, 
    CookieService, 
    BillingsService, 
    PaymentsService, 
    UserSettingsService,
    Title
  ],
  bootstrap: [AppComponent],
  exports : [
    
  ]
})
export class AppModule { }
