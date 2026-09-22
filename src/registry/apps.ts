import type { ComponentType } from "react";
import TestApp from "../apps/testapp";
import Calculator from "../apps/calculator";
import Notepad from "../apps/notepad";
import Credits from "../apps/credit";

import calc_icon from "../assets/calculator.svg"
import note_icon from "../assets/notepad.svg"
import credits_icon from "../assets/credits.svg"

export type AppMetadata = {
  id: string,
  name: string,
  icon: string,
  component: ComponentType
}


export const apps: AppMetadata[] = [
  {
    id: "testapp",
    name: "TestApp",
    icon: "EI",
    component: TestApp,
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: calc_icon,
    component: Calculator,
  },
  {
    id: "notepad",
    name: "Notepad",
    icon: note_icon,
    component: Notepad
  },
  {
    id: "credits",
    name: "Credits",
    icon: credits_icon,
    component: Credits
  }

]
