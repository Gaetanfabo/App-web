import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PublicationsComponent } from './publications/publications.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { AideContactsComponent } from './aide-contacts/aide-contacts.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    { path: 'services', component: ServicesComponent },
    { path: 'publications', component:  PublicationsComponent },
    { path: 'secteurs', component: SecteursComponent }, 
    { path: 'aide-contacts', component: AideContactsComponent },
    { path: 'a-propos', component: AProposComponent },
    { path: '', component: HomeComponent },
];
