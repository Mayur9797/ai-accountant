import { useState } from "react";
import "../styles/ProfileMenu.css";

function ProfileMenu() {

  const [open, setOpen] = useState(false);

  return (

    <div className="profile">

      <button
        className="profile-btn"
        onClick={() => setOpen(!open)}
      >
        👤 Mayur ▼
      </button>

      {open && (

        <div className="profile-menu">

          <a href="/dashboard">📊 Dashboard</a>

          <a href="/profile">👤 Profile</a>

          <a href="/settings">⚙️ Settings</a>

          <a href="/">🚪 Logout</a>

        </div>

      )}

    </div>

  );
}

export default ProfileMenu;