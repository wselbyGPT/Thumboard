import React from "react"
import { MicroUsbB } from "./footprint-components"
import { NET } from "./nets"

export const UsbSection = () => (
  <>
    <MicroUsbB
      name="J1"
      pcbX={-22}
      pcbY={-10.0}
      pcbRotation={0}
      connections={{
        VBUS: NET.VBUS_5V,
        DM: NET.USB_DM_CONN,
        DP: NET.USB_DP_CONN,
        GND: NET.GND,
        SHIELD: NET.GND,
      }}
    />

    <resistor
      name="R7"
      resistance="27ohm"
      footprint="0402"
      pcbX={-17.2}
      pcbY={-9.0}
      connections={{ pin1: NET.USB_DP_CONN, pin2: NET.USB_DP }}
    />
    <resistor
      name="R8"
      resistance="27ohm"
      footprint="0402"
      pcbX={-17.2}
      pcbY={-7.6}
      connections={{ pin1: NET.USB_DM_CONN, pin2: NET.USB_DM }}
    />
  </>
)
