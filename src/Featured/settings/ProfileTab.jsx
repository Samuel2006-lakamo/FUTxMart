import { useState } from "react";

function ProfileTab() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profile));
    alert("✅ Profile saved!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="+234 800 000 0000"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        Save Changes
      </button>
    </form>
  );
}

export default ProfileTab;