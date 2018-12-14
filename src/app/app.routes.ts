import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { NewInvoiceComponent } from './pages/new-invoice/new-invoice.component';
import { ExportInvoiceComponent } from './pages/export-invoice/export-invoice.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NeedAuthGuard } from './guards/need-auth.guard';
import { EmailVerifyComponent } from './pages/email-verify/email-verify.component';
import { VerifyEmailGuard } from './guards/verify-email/verify-email.guard';
import { RegisterGuardGuard } from './guards/register-guard/register-guard.guard';
import { LoginGuard } from './guards/login/login.guard';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

// new page
import { HomeCtnComponent } from "./contents/home/home.component";
import { HeaderCtnComponent } from "./contents/header/header.component";
import { FooterCtnComponent } from "./contents/footer/footer.component";
import { TosComponent } from "./contents/tos/tos.component";
import { DisclaimerComponent } from "./contents/disclaimer/disclaimer.component";
import { PricingComponent } from "./contents/pricing/pricing.component";
import { PrivacyComponent } from "./contents/privacy/privacy.component";



export const appRoutes: Routes = [
{ path: '', component: HomeCtnComponent },
{ path: 'disclaimer', component: DisclaimerComponent },
{ path: 'pricing', component: PricingComponent },
{ path: 'privacy', component: PrivacyComponent },
{ path: 'tos', component: TosComponent },

{
  path : 'dashboard',
  component : HomeComponent,
  // canActivate:[NeedAuthGuard]
},
{
  path : 'new',
  component : NewInvoiceComponent,
  // canActivate:[NeedAuthGuard]
},
{
  path : 'export/:id',
  component : ExportInvoiceComponent
},
{
  path : 'informations',
  component : InformationsComponent,
  // canActivate:[NeedAuthGuard]
},
{
  path : 'settings',
  component : SettingsComponent,
  // canActivate:[NeedAuthGuard]
},
{
  path : 'login',
  component : LoginComponent,
  canActivate : [LoginGuard]
},
{
  path : 'register',
  component : RegisterComponent,
  canActivate : [RegisterGuardGuard]
},
{
  path : 'email-verify',
  component : EmailVerifyComponent,
  canActivate : [VerifyEmailGuard]
},{
  path : 'reset-password',
  component : ResetPasswordComponent,
  canActivate : [RegisterGuardGuard]
}
];
