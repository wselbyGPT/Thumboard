import React from "react"
import { RP2354A, SmdCrystal12MHz } from "./footprint-components"
import { NET } from "./nets"

export const McuCoreSection = () => (
  <breakout name="CORE" padding="1.0mm" autorouter="auto">
    <RP2354A
      name="U1"
      pcbX={8.0}
      pcbY={0.0}
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

    <capacitor
      name="C6"
      capacitance="4.7uF"
      footprint="0402"
      pcbX={1.8}
      pcbY={4.3}
      connections={{ pos: NET.V3_3, neg: NET.GND }}
    />
    <capacitor
      name="C7"
      capacitance="4.7uF"
      footprint="0402"
      pcbX={4.2}
      pcbY={4.3}
      connections={{ pos: NET.V1_1, neg: NET.GND }}
    />
    <inductor
      name="L1"
      inductance="3.3uH"
      footprint="0805"
      pcbX={6.6}
      pcbY={4.3}
      connections={{ left: NET.V1_1, right: NET.VREG_LX }}
    />
    <resistor
      name="R3"
      resistance="33ohm"
      footprint="0402"
      pcbX={1.8}
      pcbY={-3.6}
      connections={{ pin1: NET.V3_3, pin2: NET.VREG_AVDD }}
    />
    <capacitor
      name="C9"
      capacitance="4.7uF"
      footprint="0402"
      pcbX={4.4}
      pcbY={-3.6}
      connections={{ pos: NET.VREG_AVDD, neg: NET.GND }}
    />

    <SmdCrystal12MHz
      name="Y1"
      pcbX={0.2}
      pcbY={1.8}
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
      pcbX={2.8}
      pcbY={1.8}
      connections={{ pin1: NET.XOUT, pin2: NET.XOUT_CRYSTAL }}
    />
    <capacitor
      name="C3"
      capacitance="15pF"
      footprint="0402"
      pcbX={-1.4}
      pcbY={3.3}
      connections={{ pos: NET.XIN, neg: NET.GND }}
    />
    <capacitor
      name="C4"
      capacitance="15pF"
      footprint="0402"
      pcbX={-1.4}
      pcbY={0.3}
      connections={{ pos: NET.XOUT_CRYSTAL, neg: NET.GND }}
    />

    <capacitor name="C10" capacitance="100nF" footprint="0402" pcbX={10.0} pcbY={-2.4} connections={{ pos: NET.V1_1, neg: NET.GND }} />
    <capacitor name="C11" capacitance="100nF" footprint="0402" pcbX={10.0} pcbY={-1.0} connections={{ pos: NET.V3_3, neg: NET.GND }} />
    <capacitor name="C12" capacitance="100nF" footprint="0402" pcbX={10.0} pcbY={0.4} connections={{ pos: NET.V3_3, neg: NET.GND }} />
    <capacitor name="C13" capacitance="100nF" footprint="0402" pcbX={10.0} pcbY={1.8} connections={{ pos: NET.V3_3, neg: NET.GND }} />
    <capacitor name="C14" capacitance="100nF" footprint="0402" pcbX={10.0} pcbY={3.2} connections={{ pos: NET.V3_3, neg: NET.GND }} />
    <capacitor name="C15" capacitance="100nF" footprint="0402" pcbX={10.0} pcbY={4.6} connections={{ pos: NET.V3_3, neg: NET.GND }} />

    <breakoutpoint connection={NET.UART0_TX} pcbX={1.0} pcbY={6.2} />
    <breakoutpoint connection={NET.UART0_RX} pcbX={3.0} pcbY={6.2} />
    <breakoutpoint connection={NET.I2C1_SDA} pcbX={5.0} pcbY={6.2} />
    <breakoutpoint connection={NET.I2C1_SCL} pcbX={7.0} pcbY={6.2} />
    <breakoutpoint connection={NET.SPI0_MISO} pcbX={9.0} pcbY={6.2} />
    <breakoutpoint connection={NET.SPI0_CSN} pcbX={11.0} pcbY={6.2} />
    <breakoutpoint connection={NET.SPI0_SCK} pcbX={13.0} pcbY={6.2} />
    <breakoutpoint connection={NET.SPI0_MOSI} pcbX={15.0} pcbY={6.2} />
    <breakoutpoint connection={NET.ADC0} pcbX={1.0} pcbY={7.8} />
    <breakoutpoint connection={NET.ADC1} pcbX={3.0} pcbY={7.8} />
    <breakoutpoint connection={NET.ADC2} pcbX={5.0} pcbY={7.8} />
    <breakoutpoint connection={NET.ADC3} pcbX={7.0} pcbY={7.8} />
    <breakoutpoint connection={NET.GPIO8} pcbX={9.0} pcbY={7.8} />
    <breakoutpoint connection={NET.GPIO9} pcbX={11.0} pcbY={7.8} />
    <breakoutpoint connection={NET.GPIO10} pcbX={13.0} pcbY={7.8} />
    <breakoutpoint connection={NET.GPIO11} pcbX={15.0} pcbY={7.8} />
    <breakoutpoint connection={NET.GPIO12} pcbX={1.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO13} pcbX={3.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO14} pcbX={5.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO15} pcbX={7.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO16} pcbX={9.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO17} pcbX={11.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO18} pcbX={13.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO19} pcbX={15.0} pcbY={9.4} />
    <breakoutpoint connection={NET.GPIO20} pcbX={5.0} pcbY={11.0} />
    <breakoutpoint connection={NET.GPIO21} pcbX={7.0} pcbY={11.0} />
    <breakoutpoint connection={NET.GPIO22} pcbX={9.0} pcbY={11.0} />
    <breakoutpoint connection={NET.GPIO23} pcbX={11.0} pcbY={11.0} />
  </breakout>
)
