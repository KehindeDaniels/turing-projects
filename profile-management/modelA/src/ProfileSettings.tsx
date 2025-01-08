// ProfileSettings.tsx
import React, { useState, useEffect } from "react";
import { UserProfile, NotificationPreference } from "./types";

interface ProfileSettingsProps {
  // No props needed for this example
}

const ProfileSettings: React.FC<ProfileSettingsProps> = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [notificationPreference, setNotificationPreference] =
    useState<NotificationPreference>("email");

  useEffect(() => {
    const storedUserProfile = localStorage.getItem("userProfile");
    if (storedUserProfile) {
      const parsedUserProfile: UserProfile = JSON.parse(storedUserProfile);
      setUserProfile(parsedUserProfile);
      setName(parsedUserProfile.name);
      setEmail(parsedUserProfile.email);
      setBio(parsedUserProfile.bio);
      setNotificationPreference(parsedUserProfile.notificationPreference);
    }
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleNotificationPreferenceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNotificationPreference(event.target.value as NotificationPreference);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUserProfile: UserProfile = {
      name,
      email,
      bio,
      notificationPreference,
    };
    setUserProfile(updatedUserProfile);
    localStorage.setItem("userProfile", JSON.stringify(updatedUserProfile));
  };

  return (
    <div>
      <h1>Profile Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Bio:
          <textarea value={bio} onChange={handleBioChange} />
        </label>
        <br />
        <label>
          Notification Preference:
          <select
            value={notificationPreference}
            onChange={handleNotificationPreferenceChange}
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
      {userProfile && (
        <div>
          <h2>Current Profile</h2>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Bio: {userProfile.bio}</p>
          <p>Notification Preference: {userProfile.notificationPreference}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
