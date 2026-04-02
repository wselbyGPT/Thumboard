import React from "react"
import { rp2354aPinLabels } from "./pinlabels"

export const RP2354A = (props: any) => (
  <chip
    {...props}
    footprint="qfn60_body_size7mm_p0.4mm"
    manufacturerPartNumber="RP2354A"
    pinLabels={rp2354aPinLabels}
    schWidth="28mm"
    schPinArrangement={{
      topSide: {
        direction: "left-to-right",
        pins: [
          "IOVDD_1",
          "IOVDD_11",
          "IOVDD_20",
          "IOVDD_30",
          "IOVDD_38",
          "IOVDD_45",
          "USB_OTP_VDD",
          "QSPI_IOVDD",
          "ADC_AVDD",
          "VREG_AVDD",
          "VREG_VIN",
          "VREG_FB",
          "DVDD_6",
          "DVDD_23",
          "DVDD_39",
        ],
      },
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "GPIO0",
          "GPIO1",
          "GPIO2",
          "GPIO3",
          "GPIO4",
          "GPIO5",
          "GPIO6",
          "GPIO7",
          "GPIO8",
          "GPIO9",
          "GPIO10",
          "GPIO11",
          "XIN",
          "XOUT",
          "SWCLK",
          "SWDIO",
          "RUN",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "GPIO12",
          "GPIO13",
          "GPIO14",
          "GPIO15",
          "GPIO16",
          "GPIO17",
          "GPIO18",
          "GPIO19",
          "GPIO20",
          "GPIO21",
          "GPIO22",
          "GPIO23",
          "GPIO24",
          "GPIO25",
          "GPIO26_ADC0",
          "GPIO27_ADC1",
          "GPIO28_ADC2",
          "GPIO29_ADC3",
        ],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [
          "VREG_PGND",
          "VREG_LX",
          "USB_DM",
          "USB_DP",
          "QSPI_SS",
          "QSPI_SD1",
          "QSPI_SD2",
          "QSPI_SD0",
          "QSPI_SCLK",
          "QSPI_SD3",
        ],
      },
    }}
  />
)

export const MicroUsbB = (props: any) => (
  <chip
    {...props}
    footprint="kicad:Connector_USB:USB_Micro-B_Molex-105017-0001"
    pinLabels={{
      pin1: "VBUS",
      pin2: "DM",
      pin3: "DP",
      pin4: "ID",
      pin5: "GND",
      pin6: "SHIELD",
    }}
    schWidth="12mm"
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["VBUS", "DM", "DP", "ID", "GND"] },
      bottomSide: { direction: "left-to-right", pins: ["SHIELD"] },
    }}
  />
)

export const Ncp1117_33 = (props: any) => (
  <chip
    {...props}
    footprint="sot223"
    manufacturerPartNumber="NCP1117ST33T3G"
    pinLabels={{
      pin1: "GND",
      pin2: "OUT",
      pin3: "IN",
      pin4: "TAB",
    }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["IN"] },
      rightSide: { direction: "top-to-bottom", pins: ["OUT"] },
      bottomSide: { direction: "left-to-right", pins: ["GND", "TAB"] },
    }}
  />
)

export const SmdCrystal12MHz = (props: any) => (
  <chip
    {...props}
    footprint="kicad:Crystal:Crystal_SMD_Abracon_ABM8G-4pin_3.2x2.5mm"
    manufacturerPartNumber="ABM8-272-T3"
    pinLabels={{
      pin1: "XTAL1",
      pin2: "GND_2",
      pin3: "XTAL2",
      pin4: "GND_4",
    }}
    schWidth="10mm"
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["XTAL1", "GND_2"] },
      rightSide: { direction: "top-to-bottom", pins: ["XTAL2", "GND_4"] },
    }}
  />
)

export const SwdHeader = (props: any) => (
  <chip
    {...props}
    footprint="pinrow3"
    pinLabels={{
      pin1: "SWCLK",
      pin2: "GND",
      pin3: "SWDIO",
    }}
    schWidth="8mm"
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["SWCLK", "GND", "SWDIO"] },
    }}
  />
)
