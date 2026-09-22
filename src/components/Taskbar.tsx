import { apps } from "../registry/apps";
import { useOSStore } from "../store/os";
import Clock from "./Clock";

import home from "../assets/home.svg"

export default function Taskbar() {
  const windows = useOSStore((state) => state.windows)
  const activeWindow = useOSStore((state) => state.activeWindow)
  const focusWindow = useOSStore((state) => state.focusWindow)
  const minimizeWindow = useOSStore((state) => state.minimizeWindow)
  const restoreWindow = useOSStore((state) => state.restoreWindow)
  const showPanel = useOSStore((state) => state.showPanel)


  return (
    <div className="taskbar">
      <button className="home-icon" onClick={() => useOSStore.setState({ showPanel: !showPanel })}>
        <img src={home} alt="home icon" />
      </button>
      {windows.map((window) => {
        const app = apps.find((app) => app.id === window.appId)
        if (!app) return null
        return (
          <button key={window.id} className={window.id === activeWindow ? "active" : ""}
            onClick={() => {
              if (window.minimize) { restoreWindow(window.id) }
              else if (window.id === activeWindow) {minimizeWindow(window.id)}
              else { focusWindow(window.id) }
            }}>
            <img className="taskbar-icon" src={app.icon} alt={app.name} />
            <span className="taskbar-tittle">{window.tittle}</span>
          </button>
        )
      })}
      <Clock />
    </div>
  )
}
