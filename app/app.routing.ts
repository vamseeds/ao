import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent} from "./about/about.component";
import { SitesComponent} from "./sites/sites.component"

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'sites',
    component: SitesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);