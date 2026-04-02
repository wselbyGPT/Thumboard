import React from "react"
import { NET } from "./nets"

export const LedSection = () => (
  <>
    <resistor
      name="R20"
      resistance="1k"
      footprint="0603"
      pcbX={-27}
      pcbY={9.4}
      connections={{ pin1: NET.V3_3, pin2: NET.PWR_LED_ANODE }}
    />
    <led
      name="D1"
      footprint="0603"
      color="green"
      pcbX={-24.0}
      pcbY={9.4}
      connections={{ pos: NET.PWR_LED_ANODE, neg: NET.GND }}
    />
    <resistor
      name="R21"
      resistance="1k"
      footprint="0603"
      pcbX={-18}
      pcbY={9.4}
      connections={{ pin1: NET.USER_LED, pin2: NET.USER_LED_ANODE }}
    />
    <led
      name="D2"
      footprint="0603"
      color="blue"
      pcbX={-15.0}
      pcbY={9.4}
      connections={{ pos: NET.USER_LED_ANODE, neg: NET.GND }}
    />
  </>
)
