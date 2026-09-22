import { apps } from "../registry/apps";
import { useOSStore } from "../store/os";
import Window from "./Window";


export default function WindowManager() {
  const windows = useOSStore((state) => state.windows)

  return (
    <>
      {windows.filter((window) => !window.minimize).map((window) => {
        const app = apps.find((app) => app.id === window.appId)

        if (!app) {return null}

        const App = app.component

        return (
          <Window key={window.id} window={window}><App /></Window>
        )
      })}
    </>
  )
}
