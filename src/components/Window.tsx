import type { ReactNode } from "react";
import { useOSStore, type OSWindow } from "../store/os";
import type React from "react";


import minimize_icon from "../assets/minimize.svg"
import close_icon from "../assets/close.svg"


type props = {
  window: OSWindow
  children: ReactNode
}

export default function Window({ window, children }: props) {
  const closeWindow = useOSStore((state) => state.closeWindow)

  const minimizeWindow = useOSStore((state) => state.minimizeWindow)

  const focusWindow = useOSStore((state) => state.focusWindow)

  const moveWindow = useOSStore((state) => state.moveWindow)

  const activeWindow = useOSStore((state) => state.activeWindow)
  const isActive = window.id === activeWindow

  function handleMouseDown(e: React.MouseEvent) {
    const offsetX = e.clientX - window.x
    const offsetY = e.clientY - window.y

    function handleMouseMove(e: MouseEvent) {
      moveWindow(window.id, e.clientX - offsetX, e.clientY - offsetY)
    }

    function handleMouseUp() {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

  }
  return (
    <div
      className="window"
      style={{
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height,
        zIndex: isActive ? 100 : 1

      }}
      onMouseDown={() => focusWindow(window.id)}
    >
      <div className="tittlebar" onMouseDown={handleMouseDown}>
        <span>{window.tittle}</span>
        <button onClick={() => minimizeWindow(window.id)}>
          <img src={minimize_icon} alt="minimize_icon"/>
        </button>
        <button onClick={() => closeWindow(window.id)}>
          <img src={close_icon} alt="close_icon"/>
        </button>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  )
}
