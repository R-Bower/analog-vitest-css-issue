import {Routes} from "@angular/router"

import {HomeComponent} from "./modules/home"

export const routes: Routes = [
  {
    component: HomeComponent,
    path: "",
    pathMatch: "full",
  },
]
