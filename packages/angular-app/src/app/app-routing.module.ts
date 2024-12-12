import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {QuicklinkStrategy} from "ngx-quicklink"

import {SharedModule} from "./common/shared"
import {HomeComponent} from "./modules/home/home.component"
import {HomeModule} from "./modules/home/home.module"

const routes: Routes = [
  {
    component: HomeComponent,
    path: "",
    pathMatch: "full",
    title: "Home",
  },
]

@NgModule({
  exports: [RouterModule],
  imports: [
    HomeModule,
    SharedModule,
    RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy}),
  ],
})
export class AppRoutingModule {}
