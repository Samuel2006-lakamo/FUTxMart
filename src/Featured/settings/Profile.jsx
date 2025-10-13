export default function Profile() {
  return (
    <div className="h-full bg-slate-50">
      <h2 className="text-2xl font-semibold text-brand mb-4 pt-4">
        Profile Settings
      </h2>
      <div className="bg-brand-accent p-4 rounded-lg">
        <p className="text-gray-700">
          Update your name, email, and profile picture here.
        </p>
      </div>
    </div>
  );
}
