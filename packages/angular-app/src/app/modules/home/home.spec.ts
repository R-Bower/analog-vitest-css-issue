import {render, screen} from "@testing-library/angular"
import {describe, expect, test} from "vitest"

import {HomeComponent} from "./home.component"

describe("home page", () => {
  test("renders", async () => {
    await render(HomeComponent)

    expect(screen.getByText("Home Page")).toBeVisible()
  })
})