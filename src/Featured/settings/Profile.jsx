import { useState } from "react";
import FloatingLabelInput from "../../ui/FloatingLabelInput";
import FloatingSelect from "../../ui/FloatingSelect";
import Button from "../../ui/Button";

export default function Profile() {
  const [firstName,setFirstName] = useState()
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <div className="h-full bg-slate-50 p-6 w-full">
      <h2 className="text-2xl font-semibold text-brand mb-4 pt-4">
        Profile Settings
      </h2>
      <div className=" flex flex-col items-center ">
        <img
          src="/images/default-user.jpg"
          className="w-50 rounded-full object-center object-cover "
          alt=""
        />
        <span>Lakamo Samuel</span>
        <div className="w-full ">
          <h2 className="text-brand font-semibold mb-4">
            Edit Profile
          </h2>

          <div className="mb-4">
            <label
              htmlFor="profile-picture"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profile-picture"
              name="profile-picture"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-brand file:hover:bg-brand"
            />
            {file && (
              <div className="mt-2 text-sm text-gray-500">
                <span>Selected file: </span>
                <span className="font-semibold">{file.name}</span>
              </div>
            )}
            <p className="text-xs text-gray-400 mt-2">
              Choose a file to upload your profile picture (JPG, PNG, or GIF
              only).
            </p>
          </div>

          
        </div>
      </div>
      <div className="bg-brand-accent p-4 rounded-lg">
        <p className="text-gray-700">
          Update your name, email, and profile picture here.
        </p>
      </div>
      <form className="py-6 flex flex-col gap-6">
        <FloatingLabelInput
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name*"
          id="firstName"
        />
        <FloatingLabelInput
          value={lastName}
          label="Last Name*"
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
        />
        <FloatingSelect
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <textarea
          className="outline-none  p-4 text-gray-500 text-sm duration-200 transform scale-100 origin-left border border-gray-300 px-2 rounded-sm"
          name=""
          id=""
          placeholder="Bio (a brief description can help)"
        ></textarea>
        <Button value="save" />
      </form>
    </div>
  );
}
