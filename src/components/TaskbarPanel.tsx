import profil from "../assets/profile.svg"
import { useOSStore } from "../store/os"



export default function TaskbarPanel() {

  const showPanel = useOSStore((state) => state.showPanel)

  if (!showPanel) {
    return null
  }

  return (
    <div className="taskbar-panel">
      <img src={profil} alt="photo" />
      <p>WrebOS</p>
      <button onClick={() => useOSStore.getState().logout()}> {"[← Logout"}</button>
    </div>
  )
}
