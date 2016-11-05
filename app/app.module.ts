import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {appRouting} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SitesComponent} from "./sites/sites.component";
import {AboutComponent} from "./about/about.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SitesComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}