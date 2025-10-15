import { useState } from "react";
import FloatingLabelInput from "../../ui/FloatingLabelInput";
import FloatingSelect from "../../ui/FloatingSelect";
import Button from "../../ui/Button";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, gender, file });
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center py-10 px-4">
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-brand mb-6">
          Profile Settings
        </h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative group">
            <img
              src={file ? URL.createObjectURL(file) : "/images/profile.jpg"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-brand shadow-sm"
            />
            <label
              htmlFor="profile-picture"
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition"
            >
              Change
            </label>
            <input
              type="file"
              id="profile-picture"
              name="profile-picture"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <span className="mt-3 font-medium text-gray-700">Lakamo Samuel</span>
          {file && (
            <p className="text-xs text-gray-500 mt-1">
              Selected file: <span className="font-semibold">{file.name}</span>
            </p>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-brand-accent p-4 rounded-lg mb-6">
          <p className="text-gray-700 text-sm">
            Update your name, gender, and profile picture here.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="flex flex-col gap-6">
          <FloatingLabelInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name*"
            id="firstName"
            required
          />

          <FloatingLabelInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name*"
            id="lastName"
            required
          />

          <FloatingSelect
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            label="Gender"
            options={[
              { label: "", value: "" },
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />

          <textarea
            className="outline-none p-4 text-gray-600 text-sm border border-gray-300 rounded-md focus:border-brand transition"
            placeholder="Bio (a brief description can help)"
            rows="3"
          ></textarea>

          <Button value="Save Changes" />
        </form>
      </div>
    </div>
  );
}
