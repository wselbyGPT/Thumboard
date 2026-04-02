import React from "react"

/**
 * RP2354A hacker board - rev A starter skeleton
 *
 * Notes:
 * - Uses code-safe net aliases: V3_3 and V1_1 instead of +3V3 / +1V1.
 * - J1 and Y1 footprints are first-pass placeholders and may need swapping
 *   to the exact part footprints you choose for manufacturing.
 * - The RP2354A pin map below follows the RP2350A QFN-60 official pinout.
 *   RP2354A is the flash-in-package variant with the same external pinout.
 * - The on-chip regulator support network is wired to match the official
 *   RP235x reference topology, but the PCB placement for that block should
 *   be tightened with manual edits after the first preview.
 */

const NET = {
  VBUS_5V: "net.VBUS_5V",
  V3_3: "net.V3_3",
  V1_1: "net.V1_1",
  GND: "net.GND",
  AGND: "net.AGND",

  USB_DP_CONN: "net.USB_DP_CONN",
  USB_DM_CONN: "net.USB_DM_CONN",
  USB_DP: "net.USB_DP",
  USB_DM: "net.USB_DM",

  VREG_LX: "net.VREG_LX",
  VREG_AVDD: "net.VREG_AVDD",

  XIN: "net.XIN",
  XOUT: "net.XOUT",
  XOUT_CRYSTAL: "net.XOUT_CRYSTAL",

  SWCLK: "net.SWCLK",
  SWDIO: "net.SWDIO",
  RUN: "net.RUN",
  USB_BOOT_N: "net.USB_BOOT_N",
  USB_BOOT_BTN: "net.USB_BOOT_BTN",

  UART0_TX: "net.UART0_TX",
  UART0_RX: "net.UART0_RX",
  I2C1_SDA: "net.I2C1_SDA",
  I2C1_SCL: "net.I2C1_SCL",
  SPI0_MISO: "net.SPI0_MISO",
  SPI0_CSN: "net.SPI0_CSN",
  SPI0_SCK: "net.SPI0_SCK",
  SPI0_MOSI: "net.SPI0_MOSI",

  ADC0: "net.ADC0",
  ADC1: "net.ADC1",
  ADC2: "net.ADC2",
  ADC3: "net.ADC3",

  GPIO8: "net.GPIO8",
  GPIO9: "net.GPIO9",
  GPIO10: "net.GPIO10",
  GPIO11: "net.GPIO11",
  GPIO12: "net.GPIO12",
  GPIO13: "net.GPIO13",
  GPIO14: "net.GPIO14",
  GPIO15: "net.GPIO15",
  GPIO16: "net.GPIO16",
  GPIO17: "net.GPIO17",
  GPIO18: "net.GPIO18",
  GPIO19: "net.GPIO19",
  GPIO20: "net.GPIO20",
  GPIO21: "net.GPIO21",
  GPIO22: "net.GPIO22",
  GPIO23: "net.GPIO23",

  USER_LED: "net.USER_LED",
  USER_LED_ANODE: "net.USER_LED_ANODE",
  PWR_LED_ANODE: "net.PWR_LED_ANODE",
} as const

const rp2354aPinLabels = {
  pin1: "IOVDD_1",
  pin2: "GPIO0",
  pin3: "GPIO1",
  pin4: "GPIO2",
  pin5: "GPIO3",
  pin6: "DVDD_6",
  pin7: "GPIO4",
  pin8: "GPIO5",
  pin9: "GPIO6",
  pin10: "GPIO7",
  pin11: "IOVDD_11",
  pin12: "GPIO8",
  pin13: "GPIO9",
  pin14: "GPIO10",
  pin15: "GPIO11",
  pin16: "GPIO12",
  pin17: "GPIO13",
  pin18: "GPIO14",
  pin19: "GPIO15",
  pin20: "IOVDD_20",
  pin21: "XIN",
  pin22: "XOUT",
  pin23: "DVDD_23",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GPIO16",
  pin28: "GPIO17",
  pin29: "GPIO18",
  pin30: "IOVDD_30",
  pin31: "GPIO19",
  pin32: "GPIO20",
  pin33: "GPIO21",
  pin34: "GPIO22",
  pin35: "GPIO23",
  pin36: "GPIO24",
  pin37: "GPIO25",
  pin38: "IOVDD_38",
  pin39: "DVDD_39",
  pin40: "GPIO26_ADC0",
  pin41: "GPIO27_ADC1",
  pin42: "GPIO28_ADC2",
  pin43: "GPIO29_ADC3",
  pin44: "ADC_AVDD",
  pin45: "IOVDD_45",
  pin46: "VREG_AVDD",
  pin47: "VREG_PGND",
  pin48: "VREG_LX",
  pin49: "VREG_VIN",
  pin50: "VREG_FB",
  pin51: "USB_DM",
  pin52: "USB_DP",
  pin53: "USB_OTP_VDD",
  pin54: "QSPI_IOVDD",
  pin55: "QSPI_SD3",
  pin56: "QSPI_SCLK",
  pin57: "QSPI_SD0",
  pin58: "QSPI_SD2",
  pin59: "QSPI_SD1",
  pin60: "QSPI_SS",
} as const

const RP2354A = (props: any) => (
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

const MicroUsbB = (props: any) => (
  <chip
    {...props}
    // TODO: replace with your exact chosen connector footprint if you do not use this Molex-compatible one
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

const Ncp1117_33 = (props: any) => (
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

const SmdCrystal12MHz = (props: any) => (
  <chip
    {...props}
    // First-pass placeholder footprint; swap to the exact ABM8 package footprint if needed.
    footprint="qfn4_body_size3.2mm_p1.8mm"
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

const SwdHeader = (props: any) => (
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

const header40PinLabels = {
  pin1: "VBUS_5V",
  pin2: "GND_2",
  pin3: "V3_3_A",
  pin4: "GND_4",
  pin5: "SWDIO",
  pin6: "SWCLK",
  pin7: "RUN",
  pin8: "USB_BOOT_N",
  pin9: "UART0_TX",
  pin10: "UART0_RX",
  pin11: "I2C1_SDA",
  pin12: "I2C1_SCL",
  pin13: "SPI0_MISO",
  pin14: "SPI0_CSN",
  pin15: "SPI0_SCK",
  pin16: "SPI0_MOSI",
  pin17: "ADC0",
  pin18: "AGND_18",
  pin19: "ADC1",
  pin20: "V3_3_B",
  pin21: "ADC2",
  pin22: "AGND_22",
  pin23: "ADC3",
  pin24: "V3_3_C",
  pin25: "GPIO8",
  pin26: "GPIO9",
  pin27: "GPIO10",
  pin28: "GPIO11",
  pin29: "GPIO12",
  pin30: "GPIO13",
  pin31: "GPIO14",
  pin32: "GPIO15",
  pin33: "GPIO16",
  pin34: "GPIO17",
  pin35: "GPIO18",
  pin36: "GPIO19",
  pin37: "GPIO20",
  pin38: "GPIO21",
  pin39: "GPIO22",
  pin40: "GPIO23",
} as const

const RightHeader = (props: any) => (
  <chip
    {...props}
    footprint="pinrow40_rows2"
    pinLabels={header40PinLabels}
    schWidth="18mm"
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "VBUS_5V",
          "V3_3_A",
          "SWDIO",
          "RUN",
          "UART0_TX",
          "I2C1_SDA",
          "SPI0_MISO",
          "SPI0_SCK",
          "ADC0",
          "ADC1",
          "ADC2",
          "ADC3",
          "GPIO8",
          "GPIO10",
          "GPIO12",
          "GPIO14",
          "GPIO16",
          "GPIO18",
          "GPIO20",
          "GPIO22",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "GND_2",
          "GND_4",
          "SWCLK",
          "USB_BOOT_N",
          "UART0_RX",
          "I2C1_SCL",
          "SPI0_CSN",
          "SPI0_MOSI",
          "AGND_18",
          "V3_3_B",
          "AGND_22",
          "V3_3_C",
          "GPIO9",
          "GPIO11",
          "GPIO13",
          "GPIO15",
          "GPIO17",
          "GPIO19",
          "GPIO21",
          "GPIO23",
        ],
      },
    }}
  />
)

export default () => {
  return (
    <board width="70mm" height="25mm" pcbOrigin="center" layers={2}>
      <pcbnotetext text="RP2354A HACKER BOARD REV A" pcbX={0} pcbY={-11.2} fontSize="1.2mm" layer="top" />
      <pcbnotetext text="USB" pcbX={-28} pcbY={-12.0} fontSize="0.9mm" layer="top" />
      <pcbnotetext text="USB_BOOT" pcbX={-15.5} pcbY={-9.6} fontSize="0.8mm" layer="top" />
      <pcbnotetext text="RUN" pcbX={-9.5} pcbY={-9.6} fontSize="0.8mm" layer="top" />
      <pcbnotetext text="SWD" pcbX={-3.2} pcbY={-9.6} fontSize="0.8mm" layer="top" />
      <pcbnotetext text="J3" pcbX={29.2} pcbY={0} fontSize="1.0mm" layer="top" />

      {/* Top edge USB connector */}
      <MicroUsbB
        name="J1"
        pcbX={-28}
        pcbY={-9.4}
        pcbRotation={0}
        connections={{
          VBUS: NET.VBUS_5V,
          DM: NET.USB_DM_CONN,
          DP: NET.USB_DP_CONN,
          GND: NET.GND,
          SHIELD: NET.GND,
        }}
      />

      {/* USB D+/D- series resistors */}
      <resistor
        name="R7"
        resistance="27ohm"
        footprint="0402"
        pcbX={-22.0}
        pcbY={-8.6}
        connections={{ left: NET.USB_DP_CONN, right: NET.USB_DP }}
      />
      <resistor
        name="R8"
        resistance="27ohm"
        footprint="0402"
        pcbX={-22.0}
        pcbY={-7.2}
        connections={{ left: NET.USB_DM_CONN, right: NET.USB_DM }}
      />

      {/* 5V -> 3.3V LDO */}
      <Ncp1117_33
        name="U2"
        pcbX={-20.0}
        pcbY={0.5}
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
        pcbX={-24.0}
        pcbY={0.0}
        connections={{ pos: NET.VBUS_5V, neg: NET.GND }}
      />
      <capacitor
        name="C5"
        capacitance="10uF"
        polarized
        footprint="0805"
        pcbX={-16.0}
        pcbY={0.0}
        connections={{ pos: NET.V3_3, neg: NET.GND }}
      />

      {/* Upper-area boot / reset / debug */}
      <pushbutton
        name="SW1"
        footprint="pushbutton_id1.3mm_od2mm"
        pcbX={-15.5}
        pcbY={-7.0}
        pcbRotation="90deg"
        connections={{ pin1: NET.USB_BOOT_BTN, pin2: NET.GND }}
      />
      <resistor
        name="R6"
        resistance="1k"
        footprint="0402"
        pcbX={-15.5}
        pcbY={-5.0}
        connections={{ left: NET.USB_BOOT_N, right: NET.USB_BOOT_BTN }}
      />
      <pushbutton
        name="SW2"
        footprint="pushbutton_id1.3mm_od2mm"
        pcbX={-9.5}
        pcbY={-7.0}
        pcbRotation="90deg"
        connections={{ pin1: NET.RUN, pin2: NET.GND }}
      />
      <SwdHeader
        name="J2"
        pcbX={-3.5}
        pcbY={-7.3}
        pcbRotation={90}
        connections={{ SWCLK: NET.SWCLK, GND: NET.GND, SWDIO: NET.SWDIO }}
      />

      {/* Center MCU */}
      <RP2354A
        name="U1"
        pcbX={0}
        pcbY={0}
        connections={{
          IOVDD_1: NET.V3_3,
          IOVDD_11: NET.V3_3,
          IOVDD_20: NET.V3_3,
          IOVDD_30: NET.V3_3,
          IOVDD_38: NET.V3_3,
          IOVDD_45: NET.V3_3,
          USB_OTP_VDD: NET.V3_3,
          QSPI_IOVDD: NET.V3_3,
          ADC_AVDD: NET.V3_3,
          DVDD_6: NET.V1_1,
          DVDD_23: NET.V1_1,
          DVDD_39: NET.V1_1,
          VREG_AVDD: NET.VREG_AVDD,
          VREG_PGND: NET.GND,
          VREG_LX: NET.VREG_LX,
          VREG_VIN: NET.V3_3,
          VREG_FB: NET.V1_1,
          XIN: NET.XIN,
          XOUT: NET.XOUT,
          SWCLK: NET.SWCLK,
          SWDIO: NET.SWDIO,
          RUN: NET.RUN,
          USB_DM: NET.USB_DM,
          USB_DP: NET.USB_DP,
          QSPI_SS: NET.USB_BOOT_N,
          GPIO0: NET.UART0_TX,
          GPIO1: NET.UART0_RX,
          GPIO2: NET.I2C1_SDA,
          GPIO3: NET.I2C1_SCL,
          GPIO4: NET.SPI0_MISO,
          GPIO5: NET.SPI0_CSN,
          GPIO6: NET.SPI0_SCK,
          GPIO7: NET.SPI0_MOSI,
          GPIO8: NET.GPIO8,
          GPIO9: NET.GPIO9,
          GPIO10: NET.GPIO10,
          GPIO11: NET.GPIO11,
          GPIO12: NET.GPIO12,
          GPIO13: NET.GPIO13,
          GPIO14: NET.GPIO14,
          GPIO15: NET.GPIO15,
          GPIO16: NET.GPIO16,
          GPIO17: NET.GPIO17,
          GPIO18: NET.GPIO18,
          GPIO19: NET.GPIO19,
          GPIO20: NET.GPIO20,
          GPIO21: NET.GPIO21,
          GPIO22: NET.GPIO22,
          GPIO23: NET.GPIO23,
          GPIO24: "net.GPIO24_RESERVED",
          GPIO25: NET.USER_LED,
          GPIO26_ADC0: NET.ADC0,
          GPIO27_ADC1: NET.ADC1,
          GPIO28_ADC2: NET.ADC2,
          GPIO29_ADC3: NET.ADC3,
        }}
      />

      {/* RP235x on-chip regulator support network */}
      <capacitor
        name="C6"
        capacitance="4.7uF"
        footprint="0402"
        pcbX={-4.5}
        pcbY={4.8}
        connections={{ pos: NET.V3_3, neg: NET.GND }}
      />
      <capacitor
        name="C7"
        capacitance="4.7uF"
        footprint="0402"
        pcbX={-1.2}
        pcbY={4.8}
        connections={{ pos: NET.V1_1, neg: NET.GND }}
      />
      <inductor
        name="L1"
        inductance="3.3uH"
        footprint="0805"
        pcbX={2.5}
        pcbY={4.4}
        connections={{ left: NET.V1_1, right: NET.VREG_LX }}
      />
      <resistor
        name="R3"
        resistance="33ohm"
        footprint="0402"
        pcbX={0.0}
        pcbY={-5.2}
        connections={{ left: NET.V3_3, right: NET.VREG_AVDD }}
      />
      <capacitor
        name="C9"
        capacitance="4.7uF"
        footprint="0402"
        pcbX={4.2}
        pcbY={-5.2}
        connections={{ pos: NET.VREG_AVDD, neg: NET.GND }}
      />

      {/* Crystal block */}
      <SmdCrystal12MHz
        name="Y1"
        pcbX={-8.5}
        pcbY={2.8}
        pcbRotation={90}
        connections={{
          XTAL1: NET.XIN,
          XTAL2: NET.XOUT_CRYSTAL,
          GND_2: NET.GND,
          GND_4: NET.GND,
        }}
      />
      <resistor
        name="R2"
        resistance="1k"
        footprint="0402"
        pcbX={-6.2}
        pcbY={2.8}
        connections={{ left: NET.XOUT, right: NET.XOUT_CRYSTAL }}
      />
      <capacitor
        name="C3"
        capacitance="15pF"
        footprint="0402"
        pcbX={-10.5}
        pcbY={4.5}
        connections={{ pos: NET.XIN, neg: NET.GND }}
      />
      <capacitor
        name="C4"
        capacitance="15pF"
        footprint="0402"
        pcbX={-10.5}
        pcbY={1.1}
        connections={{ pos: NET.XOUT_CRYSTAL, neg: NET.GND }}
      />

      {/* Decoupling */}
      <capacitor name="C10" capacitance="100nF" footprint="0402" pcbX={6.0} pcbY={-1.8} connections={{ pos: NET.V1_1, neg: NET.GND }} />
      <capacitor name="C11" capacitance="100nF" footprint="0402" pcbX={6.0} pcbY={-0.4} connections={{ pos: NET.V3_3, neg: NET.GND }} />
      <capacitor name="C12" capacitance="100nF" footprint="0402" pcbX={6.0} pcbY={1.0} connections={{ pos: NET.V3_3, neg: NET.GND }} />
      <capacitor name="C13" capacitance="100nF" footprint="0402" pcbX={6.0} pcbY={2.4} connections={{ pos: NET.V3_3, neg: NET.GND }} />
      <capacitor name="C14" capacitance="100nF" footprint="0402" pcbX={6.0} pcbY={3.8} connections={{ pos: NET.V3_3, neg: NET.GND }} />
      <capacitor name="C15" capacitance="100nF" footprint="0402" pcbX={6.0} pcbY={5.2} connections={{ pos: NET.V3_3, neg: NET.GND }} />

      {/* Right-edge grouped-function expansion header */}
      <RightHeader
        name="J3"
        pcbX={27.5}
        pcbY={0}
        pcbRotation={90}
        connections={{
          VBUS_5V: NET.VBUS_5V,
          GND_2: NET.GND,
          V3_3_A: NET.V3_3,
          GND_4: NET.GND,
          SWDIO: NET.SWDIO,
          SWCLK: NET.SWCLK,
          RUN: NET.RUN,
          USB_BOOT_N: NET.USB_BOOT_N,
          UART0_TX: NET.UART0_TX,
          UART0_RX: NET.UART0_RX,
          I2C1_SDA: NET.I2C1_SDA,
          I2C1_SCL: NET.I2C1_SCL,
          SPI0_MISO: NET.SPI0_MISO,
          SPI0_CSN: NET.SPI0_CSN,
          SPI0_SCK: NET.SPI0_SCK,
          SPI0_MOSI: NET.SPI0_MOSI,
          ADC0: NET.ADC0,
          AGND_18: NET.AGND,
          ADC1: NET.ADC1,
          V3_3_B: NET.V3_3,
          ADC2: NET.ADC2,
          AGND_22: NET.AGND,
          ADC3: NET.ADC3,
          V3_3_C: NET.V3_3,
          GPIO8: NET.GPIO8,
          GPIO9: NET.GPIO9,
          GPIO10: NET.GPIO10,
          GPIO11: NET.GPIO11,
          GPIO12: NET.GPIO12,
          GPIO13: NET.GPIO13,
          GPIO14: NET.GPIO14,
          GPIO15: NET.GPIO15,
          GPIO16: NET.GPIO16,
          GPIO17: NET.GPIO17,
          GPIO18: NET.GPIO18,
          GPIO19: NET.GPIO19,
          GPIO20: NET.GPIO20,
          GPIO21: NET.GPIO21,
          GPIO22: NET.GPIO22,
          GPIO23: NET.GPIO23,
        }}
      />

      {/* Bottom LEDs */}
      <resistor
        name="R20"
        resistance="1k"
        footprint="0603"
        pcbX={-10}
        pcbY={9.4}
        connections={{ left: NET.V3_3, right: NET.PWR_LED_ANODE }}
      />
      <led
        name="D1"
        footprint="0603"
        color="green"
        pcbX={-7.0}
        pcbY={9.4}
        connections={{ pos: NET.PWR_LED_ANODE, neg: NET.GND }}
      />
      <resistor
        name="R21"
        resistance="1k"
        footprint="0603"
        pcbX={0}
        pcbY={9.4}
        connections={{ left: NET.USER_LED, right: NET.USER_LED_ANODE }}
      />
      <led
        name="D2"
        footprint="0603"
        color="blue"
        pcbX={3.0}
        pcbY={9.4}
        connections={{ pos: NET.USER_LED_ANODE, neg: NET.GND }}
      />
    </board>
  )
}
