import "@angular/compiler"
import "@analogjs/vitest-angular/setup-zone"
import "@testing-library/jest-dom"
import "./styles.css"

import {getTestBed} from "@angular/core/testing"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
)
