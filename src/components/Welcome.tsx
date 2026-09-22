import { useOSStore } from "../store/os"
import profil_icon from "../assets/profile.svg"

export default function Welcome() {
  return (
    <div className="welcome-label">
      <img src={profil_icon} alt="profil-picture" />
      <button onClick={() => useOSStore.getState().login()}>Login</button>
      <h2>WrebOS</h2>
      <p>is a browser-based web operating system interface designed to mimic the look and feel of a desktop operating system. It provides a desktop, taskbar, windows, and apps that run directly in the browser.</p>
    </div>
  )
}
