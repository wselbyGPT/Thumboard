import React from "react"

export const BoardNotes = () => (
  <>
    <pcbnotetext text="RP2354A HACKER BOARD REV A" pcbX={0} pcbY={-11.2} fontSize="1.2mm" layer="top" />
    <pcbnotetext text="USB" pcbX={-28} pcbY={-12.0} fontSize="0.9mm" layer="top" />
    <pcbnotetext text="USB_BOOT" pcbX={-15.5} pcbY={-9.6} fontSize="0.8mm" layer="top" />
    <pcbnotetext text="RUN" pcbX={-9.5} pcbY={-9.6} fontSize="0.8mm" layer="top" />
    <pcbnotetext text="SWD" pcbX={-3.2} pcbY={-9.6} fontSize="0.8mm" layer="top" />
    <pcbnotetext text="J3" pcbX={29.2} pcbY={0} fontSize="1.0mm" layer="top" />
    <pcbnoterect pcbX={8.0} pcbY={0.0} width="18mm" height="15mm" strokeWidth="0.15mm" layer="top" />
    <pcbnotetext text="MCU / CLOCK / VREG CORE" pcbX={8.0} pcbY={8.8} fontSize="0.7mm" layer="top" />
  </>
)
