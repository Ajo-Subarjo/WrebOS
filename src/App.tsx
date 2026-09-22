import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import TaskbarPanel from "./components/TaskbarPanel";
import WindowManager from "./components/WindowManager";
import Welcome from "./components/Welcome";

import { useOSStore } from "./store/os";




export default function App() {
  const isLoggedIn = useOSStore((state) => state.logedIn)


  if (!isLoggedIn) {
    return (
      <Welcome />
    )
  }

  return (
    <main className="os">
      <Desktop />
      <WindowManager />
      <Taskbar />
      <TaskbarPanel />
    </main>
  )
}
