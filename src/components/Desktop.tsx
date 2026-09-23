import { apps } from "../registry/apps"
import { useOSStore } from "../store/os"
import wpp from "../assets/wallpaper.jpg"


export default function Desktop() {
  const openApp = useOSStore((state) => state.openApp)
  return (
    <div className="desktop" style={{ backgroundImage: `url(${wpp})`}}>
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
