import React, { useState } from "react";
import Header from "../components/ui/Header";
import { Input, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Heart, PencilLine, LogOut, Check, X } from "lucide-react";

const Profile = ({ user, onUpdateUser, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleSave = () => {
    if (!editedName.trim() || !editedEmail.trim()) {
      alert("Name and Email are required");
      return;
    }
    onUpdateUser({
      ...user,
      name: editedName,
      email: editedEmail,
      role: "USER", // Always USER
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(user.name);
    setEditedEmail(user.email);
    setIsEditing(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F9FBFC] h-screen overflow-hidden">
      <Header
        title="Profile"
        subtitle="Keep your account information up to date and secure."
        showSearch={false}
      />

      <div className="flex-1 overflow-y-auto pt-10 pb-12 px-12 flex flex-col items-center">
        {/* Profile Header section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[#60BCE9] flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-sm uppercase">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h2 className="text-2xl font-bold text-[#333333] mb-1 tracking-tight">
            {user.name}
          </h2>
          <p className="text-[#999999] text-[14px] font-medium">{user.email}</p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[500px] space-y-6">
          <div>
            <Label className="text-[#333333] font-bold text-[12px] mb-2 ml-1 uppercase tracking-wide opacity-80">
              Full Name
            </Label>
            <Input
              value={isEditing ? editedName : user.name}
              onChange={(e) => setEditedName(e.target.value)}
              readOnly={!isEditing}
              icon={Heart}
              className={`h-12 border-[#E0E0E0] rounded-xl text-[14px] font-medium transition-all ${
                isEditing
                  ? "bg-white border-primary-default ring-2 ring-primary-default/10"
                  : "bg-[#F4F6F7]/80 cursor-default"
              }`}
            />
          </div>

          <div>
            <Label className="text-[#333333] font-bold text-[12px] mb-2 ml-1 uppercase tracking-wide opacity-80">
              Email Address
            </Label>
            <Input
              value={isEditing ? editedEmail : user.email}
              onChange={(e) => setEditedEmail(e.target.value)}
              readOnly={!isEditing}
              icon={Heart}
              className={`h-12 border-[#E0E0E0] rounded-xl text-[14px] font-medium transition-all ${
                isEditing
                  ? "bg-white border-primary-default ring-2 ring-primary-default/10"
                  : "bg-[#F4F6F7]/80 cursor-default"
              }`}
            />
          </div>

          <div>
            <Label className="text-[#333333] font-bold text-[12px] mb-2 ml-1 uppercase tracking-wide opacity-80">
              Role
            </Label>
            <Input
              value="USER" // Always USER
              readOnly
              icon={Heart}
              className="h-12 bg-[#F4F6F7]/80 border-[#E0E0E0] rounded-xl text-[14px] font-medium cursor-default opacity-80"
            />
          </div>

          <div className="pt-4 flex flex-col gap-4 items-center">
            {!isEditing ? (
              <>
                <Button
                  variant="outline"
                  className="w-full max-w-[380px] h-11 border-2 border-[#0090D4] text-[#0090D4] font-bold text-[14px] flex items-center justify-center gap-2 rounded-xl hover:bg-[#0090D4]/5 transition-all"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                  <PencilLine className="w-5 h-5" />
                </Button>

                <Button
                  className="w-full max-w-[380px] h-11 bg-[#E10202] hover:bg-[#C10202] text-white font-bold text-[14px] flex items-center justify-center gap-2 rounded-xl transition-all shadow-md"
                  onClick={onLogout}
                >
                  Log Out
                  <LogOut className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <div className="flex gap-4 w-full max-w-[380px]">
                <Button
                  variant="secondary"
                  className="flex-1 h-11 border-2 border-[#E0E0E0] text-[#666666] font-bold text-[14px] flex items-center justify-center gap-2 rounded-xl hover:bg-gray-50 transition-all"
                  onClick={handleCancel}
                >
                  Cancel
                  <X className="w-5 h-5" />
                </Button>
                <Button
                  variant="primary"
                  className="flex-1 h-11 bg-[#0090D4] hover:bg-[#007AB5] text-white font-bold text-[14px] flex items-center justify-center gap-2 rounded-xl transition-all shadow-md"
                  onClick={handleSave}
                >
                  Save Changes
                  <Check className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
