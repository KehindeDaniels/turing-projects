// ProfileSettings.tsx
import React, { useState } from "react";
import { useContext } from "react";
import { ProfileContext } from "./profileContext";
import { Profile } from "./profile";

const ProfileSettings: React.FC = () => {
  const { profile, updateProfile } = useContext(ProfileContext);
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    bio: profile.bio,
    notificationPreferences: profile.notificationPreferences,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProfile(formData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    setFormData({
      name: profile.name,
      email: profile.email,
      bio: profile.bio,
      notificationPreferences: profile.notificationPreferences,
    });
  }, [profile]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Notification Preferences:
        <select
          name="notificationPreferences"
          value={formData.notificationPreferences}
          onChange={handleInputChange}
        >
          <option value="email">Email</option>
          <option value="sms">SMS</option>
        </select>
      </label>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileSettings;
