import React from "react"
import { Ncp1117_33 } from "./footprint-components"
import { NET } from "./nets"

export const PowerSection = () => (
  <>
    <Ncp1117_33
      name="U2"
      pcbX={-19.0}
      pcbY={-0.8}
      pcbRotation={90}
      connections={{
        IN: NET.VBUS_5V,
        OUT: NET.V3_3,
        TAB: NET.V3_3,
        GND: NET.GND,
      }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      polarized
      footprint="0805"
      pcbX={-23.2}
      pcbY={-1.0}
      connections={{ pos: NET.VBUS_5V, neg: NET.GND }}
    />
    <capacitor
      name="C5"
      capacitance="10uF"
      polarized
      footprint="0805"
      pcbX={-14.5}
      pcbY={-1.0}
      connections={{ pos: NET.V3_3, neg: NET.GND }}
    />
  </>
)
