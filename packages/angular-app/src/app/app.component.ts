import {Component} from "@angular/core"
import {RouterOutlet} from "@angular/router"

@Component({
  imports: [RouterOutlet],
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  template: `
    <div class="h-full w-full">
      <div class="app-main-background main-content">
        <router-outlet />
      </div>
    </div>
  `,
})
export class AppComponent {}
