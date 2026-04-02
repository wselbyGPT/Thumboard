import React from "react"
import { SwdHeader } from "./footprint-components"
import { NET } from "./nets"

export const DebugSection = () => (
  <>
    <pushbutton
      name="SW1"
      footprint="pushbutton_id1.3mm_od2mm"
      pcbX={-13.5}
      pcbY={-8.0}
      pcbRotation="90deg"
      connections={{ pin1: NET.USB_BOOT_BTN, pin2: NET.GND, pin3: NET.USB_BOOT_BTN, pin4: NET.GND }}
    />
    <resistor
      name="R6"
      resistance="1k"
      footprint="0402"
      pcbX={-13.5}
      pcbY={-6.1}
      connections={{ pin1: NET.USB_BOOT_N, pin2: NET.USB_BOOT_BTN }}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton_id1.3mm_od2mm"
      pcbX={-8.0}
      pcbY={-8.0}
      pcbRotation="90deg"
      connections={{ pin1: NET.RUN, pin2: NET.GND, pin3: NET.RUN, pin4: NET.GND }}
    />
    <SwdHeader
      name="J2"
      pcbX={-1.8}
      pcbY={-8.0}
      pcbRotation={90}
      connections={{ SWCLK: NET.SWCLK, GND: NET.GND, SWDIO: NET.SWDIO }}
    />
  </>
)
