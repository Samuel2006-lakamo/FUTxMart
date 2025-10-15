import { useState } from "react";
import FloatingLabelInput from "../../ui/FloatingLabelInput";
import FloatingSelect from "../../ui/FloatingSelect";
import Button from "../../ui/Button";

export default function ShopSettings() {
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
const [phone, setPhone] = useState('')
 
  const handleSave = (e) => {
    e.preventDefault();
    console.log({
      shopName,
      description,
      category,
      
      facebook,
      instagram,
    });
    alert("Shop settings updated successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-6">
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-brand mb-6">
          Shop Settings
        </h2>

        {/* Info Section */}
        <div className="bg-brand-accent p-4 rounded-lg mb-6">
          <p className="text-gray-700 text-sm">
            Update your shop name, description, logo, banner, category, and
            social links here.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="flex flex-col gap-6">
          <FloatingLabelInput
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            label="Shop Name*"
            id="shopName"
            required
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none p-4 text-gray-600 text-sm border border-gray-300 rounded-md focus:border-brand transition"
            placeholder="Shop Description"
            rows="3"
          ></textarea>
          <div className="flex flex-col">
            <FloatingLabelInput
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Phone*"
              id="phone"
            />
            <span className="text-[12px] px-2 text-gray-500 ">please provide you whatsApp number.</span>
          </div>

          <FloatingSelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Shop Category*"
            options={[
              { label: "", value: "" },
              { label: "Electronics", value: "electronics" },
              { label: "Fashion", value: "fashion" },
              { label: "Beauty", value: "beauty" },
              { label: "Books", value: "books" },
              { label: "Other", value: "other" },
            ]}
          />

          {/* Social Links */}
          <FloatingLabelInput
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            label="Facebook URL"
            id="facebook"
          />
          <FloatingLabelInput
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            label="Instagram URL"
            id="instagram"
          />

          <Button value="Save Changes" />
        </form>
      </div>
    </div>
  );
}
