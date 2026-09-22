import { apps } from "../registry/apps"
import { useOSStore } from "../store/os"


export default function Desktop() {
  const openApp = useOSStore((state) => state.openApp)

  return (
    <div className="desktop">
      {apps.map((app) => (
        <div key={app.id} className="desktop-icon" onDoubleClick={() => openApp(app.id, app.name)}>
          <div className="desktop-icon-image">
            <img src={app.icon} alt={app.name} />
          </div>
          <span>{app.name}</span>
        </div>
      ))}
    </div>
  )
}
