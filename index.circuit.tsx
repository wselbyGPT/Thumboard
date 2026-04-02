import React from "react"
import { BoardNotes } from "./board-notes"
import { DebugSection } from "./debug-section"
import { HeaderSection } from "./header-section"
import { LedSection } from "./led-section"
import { McuCoreSection } from "./mcu-core-section"
import { Mechanicals } from "./mechanicals"
import { PowerSection } from "./power-section"
import { UsbSection } from "./usb-section"

/**
 * RP2354A hacker board - rev A starter skeleton
 */
export default () => {
  return (
    <board width="70mm" height="30mm" pcbOrigin="center" layers={2}>
      <BoardNotes />
      <Mechanicals />
      <UsbSection />
      <PowerSection />
      <DebugSection />
      <McuCoreSection />
      <HeaderSection />
      <LedSection />
    </board>
  )
}
