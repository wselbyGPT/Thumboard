import React from "react"
import { NET } from "./nets"

export const HeaderSection = () => (
  <pinheader
    name="J3"
    pinCount={40}
    gender="male"
    pitch="2.54mm"
    footprint="pinrow40_rows2"
    doubleRow={true}
    showSilkscreenPinLabels={false}
    pcbX={12}
    pcbY={12.8}
    pcbPositionAnchor="center_top"
    pcbRotation="0deg"
    pinLabels={[
      "VBUS_5V", "GND",
      "V3_3", "GND",
      "SWDIO", "SWCLK",
      "RUN", "USB_BOOT_N",
      "UART0_TX", "UART0_RX",
      "I2C1_SDA", "I2C1_SCL",
      "SPI0_MISO", "SPI0_CSN",
      "SPI0_SCK", "SPI0_MOSI",
      "ADC0", "AGND",
      "ADC1", "V3_3",
      "ADC2", "AGND",
      "ADC3", "V3_3",
      "GPIO8", "GPIO9",
      "GPIO10", "GPIO11",
      "GPIO12", "GPIO13",
      "GPIO14", "GPIO15",
      "GPIO16", "GPIO17",
      "GPIO18", "GPIO19",
      "GPIO20", "GPIO21",
      "GPIO22", "GPIO23",
    ]}
    connections={{
      pin1: NET.VBUS_5V,
      pin2: NET.GND,
      pin3: NET.V3_3,
      pin4: NET.GND,
      pin5: NET.SWDIO,
      pin6: NET.SWCLK,
      pin7: NET.RUN,
      pin8: NET.USB_BOOT_N,
      pin9: NET.UART0_TX,
      pin10: NET.UART0_RX,
      pin11: NET.I2C1_SDA,
      pin12: NET.I2C1_SCL,
      pin13: NET.SPI0_MISO,
      pin14: NET.SPI0_CSN,
      pin15: NET.SPI0_SCK,
      pin16: NET.SPI0_MOSI,
      pin17: NET.ADC0,
      pin18: NET.AGND,
      pin19: NET.ADC1,
      pin20: NET.V3_3,
      pin21: NET.ADC2,
      pin22: NET.AGND,
      pin23: NET.ADC3,
      pin24: NET.V3_3,
      pin25: NET.GPIO8,
      pin26: NET.GPIO9,
      pin27: NET.GPIO10,
      pin28: NET.GPIO11,
      pin29: NET.GPIO12,
      pin30: NET.GPIO13,
      pin31: NET.GPIO14,
      pin32: NET.GPIO15,
      pin33: NET.GPIO16,
      pin34: NET.GPIO17,
      pin35: NET.GPIO18,
      pin36: NET.GPIO19,
      pin37: NET.GPIO20,
      pin38: NET.GPIO21,
      pin39: NET.GPIO22,
      pin40: NET.GPIO23,
    }}
  />
)
