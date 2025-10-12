function NotificationsTab() {
  const options = [
    "Order Updates",
    "New Reviews",
    "Promotions & Marketing",
    "System Alerts",
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
      <div className="space-y-3">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-purple-700" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
export default NotificationsTab;