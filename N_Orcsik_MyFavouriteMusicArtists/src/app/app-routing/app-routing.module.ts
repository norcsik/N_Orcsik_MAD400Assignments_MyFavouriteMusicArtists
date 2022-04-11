import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from '../content-list/content-list.component';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  { 
    path: "list", 
    component: ContentListComponent 
  },
  { 
    path: "list/:id", 
    component: CardDetailsComponent
  },
  { 
    path: "**", 
    component: PageNotFoundComponent 
  }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
