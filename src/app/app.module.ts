import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { CasesComponent } from './cases/cases.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { MemberComponent } from './team/member/member.component';
import { BannerComponent } from './banner/banner.component';
import { CaseComponent } from './cases/case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TeamComponent,
    CasesComponent,
    AboutComponent,
    ContactsComponent,
    ContactComponent,
    MemberComponent,
    BannerComponent,
    CaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
