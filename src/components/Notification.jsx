import "../styles/Notification.css";

function Notification() {
  return (
    <div className="notification-box">

      <h2>🔔 Notifications</h2>

      <div className="notification success">
        ✅ Salary credited successfully.
      </div>

      <div className="notification warning">
        ⚠️ Food expenses exceeded your monthly budget.
      </div>

      <div className="notification info">
        📅 Electricity bill payment is due tomorrow.
      </div>

    </div>
  );
}

export default Notification;